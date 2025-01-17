export type UserRole = 'admin' | 'client' | 'contractor' | 'consultant';
export type AccessLevel = 'view' | 'edit' | 'approve' | 'admin';

export type User = {
  id: string;
  email?: string;
  role: UserRole;
  full_name?: string;
  created_at?: string;
};

export type ProjectType = 'capital' | 'maintenance';
export type ProjectStatus = 'planning' | 'in_progress' | 'on_hold' | 'completed';
export type ProjectPriority = 'low' | 'medium' | 'high';

export type Project = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  budget: number;
  clientId: string;
  contractorId: string;
  consultantId: string;
  type: ProjectType;
  status: ProjectStatus;
  priority: ProjectPriority;
  createdAt: string;
  updatedAt: string;
};

export type ProjectFormData = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;

export type MaterialRequest = {
  id: string;
  projectId: string;
  requesterName: string;
  department: string;
  requestDate: string;
  materialName: string;
  quantity: number;
  unit: string;
  requiredByDate: string;
  specifications: string;
  estimatedCost: number;
  purpose: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
};

export type PurchaseOrder = {
  id: string;
  poNumber: string;
  supplierName: string;
  supplierAddress: string;
  supplierContact: string;
  orderDate: string;
  deliveryDate: string;
  materials: {
    name: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    totalPrice: number;
  }[];
  totalCost: number;
  paymentTerms: string;
  specialInstructions: string;
  status: 'draft' | 'sent' | 'received' | 'completed';
  createdAt: string;
  updatedAt: string;
};

export type BidSubmission = {
  id: string;
  projectId: string;
  contractorName: string;
  contractorLicense: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  bidAmount: number;
  technicalProposal: string;
  financialProposal: string;
  supportingDocs: string[];
  submissionDate: string;
  termsAccepted: boolean;
  status: 'submitted' | 'under_review' | 'accepted' | 'rejected';
  createdAt: string;
  updatedAt: string;
};

export type RegisterFormData = {
  email: string;
  password: string;
  full_name: string;
  company_name: string;
  contact_number: string;
  user_role: 'client' | 'contractor' | 'consultant';
  profile_picture_url?: string;
};