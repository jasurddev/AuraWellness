"use client";

import { useStore } from '@/store/useStore';
import { OverviewTab } from '@/components/admin/OverviewTab';
import { ScheduleTab } from '@/components/admin/ScheduleTab';
import { EMRTab } from '@/components/admin/EMRTab';
import { AnalyticsTab } from '@/components/admin/AnalyticsTab';
import { InventoryTab } from '@/components/admin/InventoryTab';

export default function AdminPage() {
  const { activeTab } = useStore();

  return (
    <div className="h-full animate-in fade-in duration-300">
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'schedule' && <ScheduleTab />}
      {activeTab === 'emr' && <EMRTab />}
      {activeTab === 'analytics' && <AnalyticsTab />}
      {activeTab === 'inventory' && <InventoryTab />}
    </div>
  );
}
