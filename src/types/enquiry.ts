export type PropertyType =
  | 'Existing Home'
  | 'Old Home / Renovation'
  | 'Under Construction'
  | 'Other';

export type ProjectStage =
  | 'Exploring Ideas'
  | 'Planning'
  | 'Under Construction'
  | 'Renovation'
  | 'Ready for Design';

export type EnquiryStatus = 'new' | 'reviewed' | 'contacted' | 'closed';

export interface ProjectEnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  propertyType: PropertyType;
  projectStage: ProjectStage;
  location?: string;
  projectScope?: string;
  vision?: string;
}

export interface ProjectEnquiry extends ProjectEnquiryPayload {
  id: string;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
}

export interface FieldValidationError {
  field: keyof ProjectEnquiryPayload;
  issue: string;
}

export interface EnquirySuccessResponse {
  success: true;
  message: string;
  data: {
    id: string;
    status: EnquiryStatus;
    createdAt: string;
  };
}

export interface EnquiryErrorResponse {
  success: false;
  error: {
    code: 'VALIDATION_FAILED' | 'INVALID_PAYLOAD' | 'SERVER_ERROR';
    message: string;
    details?: FieldValidationError[];
  };
}

export type EnquiryResponse = EnquirySuccessResponse | EnquiryErrorResponse;
