"use client";

import { useStore } from '@/store/useStore';
import { OverviewTab } from '@/components/admin/OverviewTab';
import { ScheduleTab } from '@/components/admin/ScheduleTab';
import { EMRTab } from '@/components/admin/EMRTab';

export default function AdminPage() {
  const { activeTab } = useStore();

  return (
    <div className="h-full animate-in fade-in duration-300">
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'schedule' && <ScheduleTab />}
      {activeTab === 'emr' && <EMRTab />}
    </div>
  );
}
