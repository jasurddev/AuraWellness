import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

config({ path: '.env' })

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Seeding database with default TwakOS demo data...')

  // 1. Create a dummy clinic (Tenant)
  const clinic = await prisma.clinic.upsert({
    where: { subdomain: 'kemang' },
    update: {},
    create: {
      name: 'Twak Aesthetics - Kemang',
      subdomain: 'kemang',
      address: 'Jl. Kemang Raya No. 123, Jakarta Selatan',
      phone: '08123456789',
    },
  })
  console.log(`Clinic created: ${clinic.name}`)

  // 2. Create users (Admin, Doctor, Patient) for this clinic
  
  // Frontdesk Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@twakos.com' },
    update: {},
    create: {
      email: 'admin@twakos.com',
      name: 'Admin Kemang',
      role: 'FRONTDESK',
      clinicId: clinic.id,
    },
  })
  console.log(`Admin created: ${admin.email}`)

  // Doctor
  const doctor = await prisma.user.upsert({
    where: { email: 'dr.sarah@twakos.com' },
    update: {},
    create: {
      email: 'dr.sarah@twakos.com',
      name: 'Dr. Sarah Lee',
      role: 'DOCTOR',
      clinicId: clinic.id,
    },
  })
  console.log(`Doctor created: ${doctor.email}`)

  // Patient
  const patient = await prisma.user.upsert({
    where: { email: 'pasien@example.com' },
    update: {},
    create: {
      email: 'pasien@example.com',
      name: 'Budi Santoso',
      role: 'PATIENT',
      clinicId: clinic.id,
    },
  })
  console.log(`Patient created: ${patient.email}`)

  console.log('Seeding finished successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
