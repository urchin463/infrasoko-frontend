import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MaterialRequestForm } from '@/components/procurement/MaterialRequestForm';
import { PurchaseOrderForm } from '@/components/procurement/PurchaseOrderForm';
import { BidSubmissionForm } from '@/components/procurement/BidSubmissionForm';
import {
  FileText,
  ShoppingCart,
  Gavel,
  Plus,
  Package,
  FileCheck,
  Building2,
  ArrowRight,
} from 'lucide-react';

export function Procurement() {
  const [isMaterialRequestOpen, setIsMaterialRequestOpen] = useState(false);
  const [isPurchaseOrderOpen, setIsPurchaseOrderOpen] = useState(false);
  const [isBidSubmissionOpen, setIsBidSubmissionOpen] = useState(false);

  const procurementCards = [
    {
      title: 'Material Requests',
      description: 'Submit and track material requests for your projects',
      icon: Package,
      color: 'bg-blue-500',
      stats: {
        total: 24,
        pending: 8,
        approved: 16,
      },
      onClick: () => setIsMaterialRequestOpen(true),
    },
    {
      title: 'Purchase Orders',
      description: 'Create and manage purchase orders with suppliers',
      icon: FileCheck,
      color: 'bg-green-500',
      stats: {
        total: 18,
        draft: 3,
        sent: 15,
      },
      onClick: () => setIsPurchaseOrderOpen(true),
    },
    {
      title: 'Bid Submissions',
      description: 'Submit and track project bids and proposals',
      icon: Building2,
      color: 'bg-purple-500',
      stats: {
        total: 12,
        active: 5,
        closed: 7,
      },
      onClick: () => setIsBidSubmissionOpen(true),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Procurement</h1>
          <p className="text-gray-500 mt-1">
            Manage material requests, purchase orders, and bid submissions
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {procurementCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`${card.color} p-3 rounded-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  {Object.entries(card.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{value}</p>
                      <p className="text-xs text-gray-500 capitalize">{key}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button
                    className="w-full"
                    onClick={card.onClick}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create New
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <MaterialRequestForm
        open={isMaterialRequestOpen}
        onOpenChange={setIsMaterialRequestOpen}
        request={null}
        onSuccess={() => {}}
      />

      <PurchaseOrderForm
        open={isPurchaseOrderOpen}
        onOpenChange={setIsPurchaseOrderOpen}
        order={null}
        onSuccess={() => {}}
      />

      <BidSubmissionForm
        open={isBidSubmissionOpen}
        onOpenChange={setIsBidSubmissionOpen}
        bid={null}
        onSuccess={() => {}}
      />
    </div>
  );
}