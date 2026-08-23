import type {
  ProjectEnquiryPayload,
  ProjectEnquiry,
  EnquiryResponse,
  FieldValidationError,
} from '../types/enquiry';

const STORAGE_KEY = 'design_haven_enquiries';

/**
 * Validates the enquiry payload on both client and simulated backend.
 */
export function validateEnquiryPayload(
  payload: Partial<ProjectEnquiryPayload>
): FieldValidationError[] {
  const errors: FieldValidationError[] = [];

  // Full Name
  if (!payload.fullName || payload.fullName.trim().length < 2) {
    errors.push({
      field: 'fullName',
      issue: 'Please provide your full name (minimum 2 characters).',
    });
  } else if (payload.fullName.length > 100) {
    errors.push({
      field: 'fullName',
      issue: 'Full name must not exceed 100 characters.',
    });
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.push({
      field: 'email',
      issue: 'Please provide a valid email address (e.g. name@domain.com).',
    });
  }

  // Phone
  const phoneRegex = /^[\d\s+\-()]{7,20}$/;
  if (!payload.phone || !phoneRegex.test(payload.phone.trim())) {
    errors.push({
      field: 'phone',
      issue: 'Please provide a valid phone number (7-20 digits).',
    });
  }

  // Property Type
  if (!payload.propertyType) {
    errors.push({
      field: 'propertyType',
      issue: 'Please select a property category.',
    });
  }

  // Project Stage
  if (!payload.projectStage) {
    errors.push({
      field: 'projectStage',
      issue: 'Please select your current project stage.',
    });
  }

  // Vision
  if (payload.vision && payload.vision.length > 3000) {
    errors.push({
      field: 'vision',
      issue: 'Project vision notes must not exceed 3000 characters.',
    });
  }

  return errors;
}

/**
 * Sanitizes user text input strings.
 */
function sanitizeInput(str: string = ''): string {
  return str.replace(/<[^>]*>?/gm, '').trim();
}

/**
 * Frontend service abstraction for submitting project enquiries matching BACKEND_SCHEMA.md.
 * NOTE: This implementation simulates network latency (700ms) and uses browser localStorage
 * for client-side persistence. It prepares the data contract for future API integration without
 * falsely implying a live production backend is connected.
 */
export async function submitProjectEnquiry(
  payload: ProjectEnquiryPayload
): Promise<EnquiryResponse> {
  // Simulate network roundtrip latency
  await new Promise((resolve) => setTimeout(resolve, 700));

  // Run validation
  const validationErrors = validateEnquiryPayload(payload);
  if (validationErrors.length > 0) {
    return {
      success: false,
      error: {
        code: 'VALIDATION_FAILED',
        message: 'The submitted enquiry contains invalid or missing required fields.',
        details: validationErrors,
      },
    };
  }

  try {
    const sanitizedPayload: ProjectEnquiryPayload = {
      fullName: sanitizeInput(payload.fullName),
      email: sanitizeInput(payload.email),
      phone: sanitizeInput(payload.phone),
      propertyType: payload.propertyType,
      projectStage: payload.projectStage,
      location: payload.location ? sanitizeInput(payload.location) : undefined,
      projectScope: payload.projectScope ? sanitizeInput(payload.projectScope) : undefined,
      vision: payload.vision ? sanitizeInput(payload.vision) : undefined,
    };

    const id = `enq_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const now = new Date().toISOString();

    const enquiryRecord: ProjectEnquiry = {
      ...sanitizedPayload,
      id,
      status: 'new',
      createdAt: now,
      updatedAt: now,
    };

    // Store in localStorage for client persistence simulation
    const existingStr = localStorage.getItem(STORAGE_KEY);
    const existing: ProjectEnquiry[] = existingStr ? JSON.parse(existingStr) : [];
    existing.unshift(enquiryRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

    return {
      success: true,
      message:
        'Your project enquiry has been submitted successfully. The Design Haven team will review your vision and respond promptly.',
      data: {
        id,
        status: 'new',
        createdAt: now,
      },
    };
  } catch {
    return {
      success: false,
      error: {
        code: 'SERVER_ERROR',
        message: 'An unexpected error occurred while saving your enquiry. Please try again.',
      },
    };
  }
}
