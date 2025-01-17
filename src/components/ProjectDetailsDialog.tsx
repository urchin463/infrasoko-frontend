import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { format } from 'date-fns';
import {
  Calendar,
  MapPin,
  DollarSign,
  BarChart,
  Building2,
  HardHat,
  GraduationCap,
  Clock,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import type { Project, User } from '../types';

type ProjectDetailsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
  users: User[];
};

export function ProjectDetailsDialog({
  open,
  onOpenChange,
  project,
  users,
}: ProjectDetailsDialogProps) {
  if (!project) return null;

  const getUserName = (userId: string) => {
    const user = users.find(u => u.id === userId);
    return user?.full_name || 'Unknown';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      planning: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      on_hold: 'bg-orange-100 text-orange-800',
      completed: 'bg-green-100 text-green-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'medium':
        return <BarChart className="h-5 w-5 text-yellow-500" />;
      case 'low':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  const calculateProgress = (startDate: string, endDate: string) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();
    
    if (now <= start) return 0;
    if (now >= end) return 100;
    
    return Math.round(((now - start) / (end - start)) * 100);
  };

  const progress = calculateProgress(project.startDate, project.endDate);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.name}</DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          {/* Status and Priority */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              {project.status.replace('_', ' ')}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Priority:</span>
              {getPriorityIcon(project.priority)}
              <span className="text-sm font-medium capitalize">{project.priority}</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>

          {/* Progress */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Project Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Key Details Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Project Details</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-sm font-medium">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Budget</p>
                    <p className="text-sm font-medium">
                      ${project.budget.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Project Type</p>
                    <p className="text-sm font-medium capitalize">{project.type}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Project Team</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="text-sm font-medium">{getUserName(project.clientId)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HardHat className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Contractor</p>
                    <p className="text-sm font-medium">{getUserName(project.contractorId)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Consultant</p>
                    <p className="text-sm font-medium">{getUserName(project.consultantId)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Project Timeline</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="text-sm font-medium">
                    {format(new Date(project.startDate), 'MMMM d, yyyy')}
                  </p>
                </div>
              </div>
              <div className="h-0.5 flex-1 bg-gray-200 mx-4" />
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm text-gray-500">End Date</p>
                  <p className="text-sm font-medium">
                    {format(new Date(project.endDate), 'MMMM d, yyyy')}
                  </p>
                </div>
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}