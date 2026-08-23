import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { submitProjectEnquiry } from '../../services/enquiryService';
import { INTERIOR_IMAGES } from '../../data/interiorImages';
import type {
  ProjectEnquiryPayload,
  FieldValidationError,
  EnquirySuccessResponse,
} from '../../types/enquiry';
import {
  User,
  Home,
  FileText,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

export interface EnquiryFormProps {
  onSuccess?: (id: string) => void;
  onCancel?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ onSuccess, onCancel }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submissionSuccess, setSubmissionSuccess] = useState<EnquirySuccessResponse | null>(null);

  // Form State
  const [formData, setFormData] = useState<ProjectEnquiryPayload>({
    fullName: '',
    email: '',
    phone: '',
    propertyType: 'Existing Home',
    projectStage: 'Exploring Ideas',
    location: '',
    projectScope: 'Full Spatial Transformation',
    vision: '',
  });

  const propertyOptions = [
    { value: 'Existing Home', label: 'Existing Home (Refresh & Layout Optimization)' },
    { value: 'Old Home / Renovation', label: 'Older Property / Structural Renovation' },
    { value: 'Under Construction', label: 'Bare Structure / New Architectural Build' },
    { value: 'Other', label: 'Other Spatial Scenario' },
  ];

  const stageOptions = [
    { value: 'Exploring Ideas', label: 'Exploring Initial Ideas & Mood Boards' },
    { value: 'Planning', label: 'Planning & Defining Spatial Requirements' },
    { value: 'Renovation', label: 'Renovation Scheduled / In Progress' },
    { value: 'Under Construction', label: 'Bare Frame Construction Underway' },
    { value: 'Ready for Design', label: 'Ready for Immediate Design Collaboration' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Step 1 Client Validation
  const validateStep1 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.fullName || formData.fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    const phoneRegex = /^[\d\s+\-()]{7,20}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid contact phone number.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Step 2 Client Validation
  const validateStep2 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.propertyType) {
      errors.propertyType = 'Please select your property type.';
    }
    if (!formData.projectStage) {
      errors.projectStage = 'Please select your current project stage.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    setGlobalError(null);
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setGlobalError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError(null);

    // Validate Step 1 & 2 again
    if (!validateStep1() || !validateStep2()) {
      setCurrentStep(1);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitProjectEnquiry(formData);
      if (response.success) {
        setSubmissionSuccess(response);
        if (onSuccess) onSuccess(response.data.id);
      } else {
        if (response.error.details) {
          const mapped: Record<string, string> = {};
          response.error.details.forEach((err: FieldValidationError) => {
            mapped[err.field] = err.issue;
          });
          setFieldErrors(mapped);
        }
        setGlobalError(response.error.message);
      }
    } catch {
      setGlobalError('An unexpected connection error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION SCREEN
  if (submissionSuccess) {
    return (
      <div className="space-y-6 py-4 animate-in fade-in duration-300">
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#c5a059] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <Badge variant="accent">Enquiry Transmitted</Badge>

          <h3 className="text-2xl font-serif-editorial font-bold text-[#f7f6f2]">
            Project Vision Received
          </h3>

          <p className="text-xs text-[#a8a69e] font-sans-architectural leading-relaxed max-w-md mx-auto">
            Thank you, <span className="text-[#f7f6f2] font-bold">{formData.fullName}</span>. Your enquiry has been registered in our system.
          </p>
        </div>

        {/* Reference Details Box */}
        <div className="p-4 bg-[#0c0c0b] border border-white/10 rounded-sm space-y-3 text-xs font-mono">
          <div className="flex justify-between items-center pb-2 border-b border-white/[0.08] text-[#a8a69e]">
            <span>Enquiry ID:</span>
            <span className="text-[#c5a059] font-bold">{submissionSuccess.data.id}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#a8a69e] text-[11px]">
            <div>
              <span className="text-[#737168] block">Property Category:</span>
              <span>{formData.propertyType}</span>
            </div>
            <div>
              <span className="text-[#737168] block">Project Stage:</span>
              <span>{formData.projectStage}</span>
            </div>
            <div>
              <span className="text-[#737168] block">Email Contact:</span>
              <span>{formData.email}</span>
            </div>
            <div>
              <span className="text-[#737168] block">Status:</span>
              <span className="text-[#c5a059] uppercase font-bold">Received / Queue</span>
            </div>
          </div>
        </div>

        {/* Reassurance Next Steps */}
        <div className="p-4 bg-[#1c1b18] border border-white/[0.08] rounded-sm space-y-2 text-xs font-sans-architectural text-[#a8a69e]">
          <div className="flex items-center gap-1.5 font-mono text-[#c5a059] font-bold">
            <Clock className="w-4 h-4" />
            <span>Expected Next Steps:</span>
          </div>
          <p>
            1. Our architectural design team will review your property context and vision notes.
          </p>
          <p>
            2. We will reach out via <span className="text-[#f7f6f2] font-mono">{formData.email}</span> to confirm preliminary spatial feasibility and schedule a zero-pressure dialogue.
          </p>
        </div>

        <div className="pt-2">
          <Button
            variant="outline"
            size="md"
            className="w-full font-mono uppercase tracking-wider"
            onClick={onCancel}
          >
            Close & Return to Homepage
          </Button>
        </div>
      </div>
    );
  }

  // MULTI-STEP QUESTIONNAIRE
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Architectural Visual Header Banner */}
      <div className="relative h-24 sm:h-28 rounded-sm overflow-hidden border border-white/10 shadow-lg">
        <img
          src={INTERIOR_IMAGES.img10.src}
          alt="Organic Spa Sanctuary Bath"
          className="w-full h-full object-cover filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141412] via-[#141412]/60 to-transparent" />
        <div className="absolute bottom-3 left-4 text-xs space-y-0.5 z-10">
          <div className="text-[#c5a059] text-[10px] font-mono uppercase tracking-widest font-bold flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            <span>Guided Vision Questionnaire</span>
          </div>
          <div className="text-[#f7f6f2] font-serif-editorial font-bold text-sm sm:text-base">
            Collaborative Spatial Inquiry
          </div>
        </div>
      </div>

      {/* Progress Bar & Step Indicator */}
      <div className="space-y-2 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#c5a059] uppercase tracking-widest font-bold">
            Step {currentStep} of 3
          </span>
          <span className="text-[#a8a69e]">
            {currentStep === 1 && '1. Personal Contact Details'}
            {currentStep === 2 && '2. Property Context & Stage'}
            {currentStep === 3 && '3. Vision & Spatial Scope'}
          </span>
        </div>

        <div className="w-full h-1 bg-[#0c0c0b] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#c5a059] transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Global Error Banner */}
      {globalError && (
        <div
          role="alert"
          aria-live="polite"
          className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-sm text-xs text-red-300 flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{globalError}</span>
        </div>
      )}

      {/* STEP 1: CONTACT DETAILS */}
      {currentStep === 1 && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs font-mono text-[#f7f6f2] uppercase tracking-wider">
            <User className="w-4 h-4 text-[#c5a059]" />
            <span>Contact Information</span>
          </div>

          <Input
            label="Full Name"
            name="fullName"
            placeholder="e.g. Eleanor Vance"
            value={formData.fullName}
            onChange={handleChange}
            error={fieldErrors.fullName}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="e.g. eleanor@example.com"
            value={formData.email}
            onChange={handleChange}
            error={fieldErrors.email}
            helperText="Used strictly to transmit design feedback."
            required
          />

          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="e.g. +1 555-019-2834"
            value={formData.phone}
            onChange={handleChange}
            error={fieldErrors.phone}
            helperText="Required for consultation coordination."
            required
          />
        </div>
      )}

      {/* STEP 2: PROPERTY CONTEXT & STAGE */}
      {currentStep === 2 && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs font-mono text-[#f7f6f2] uppercase tracking-wider">
            <Home className="w-4 h-4 text-[#c5a059]" />
            <span>Property & Project Context</span>
          </div>

          <Select
            label="Property Category"
            name="propertyType"
            options={propertyOptions}
            value={formData.propertyType}
            onChange={handleChange}
            error={fieldErrors.propertyType}
            required
          />

          <Select
            label="Current Project Stage"
            name="projectStage"
            options={stageOptions}
            value={formData.projectStage}
            onChange={handleChange}
            error={fieldErrors.projectStage}
            required
          />

          <Input
            label="Property Location (Optional)"
            name="location"
            placeholder="e.g. Seattle, WA or London, UK"
            value={formData.location || ''}
            onChange={handleChange}
            helperText="City or region helps frame climate and structural context."
          />
        </div>
      )}

      {/* STEP 3: VISION & SCOPE */}
      {currentStep === 3 && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-xs font-mono text-[#f7f6f2] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#c5a059]" />
            <span>Project Scope & Vision Notes</span>
          </div>

          <Input
            label="Target Spatial Scope"
            name="projectScope"
            placeholder="e.g. Full Residence, Main Living Suite, Kitchen & Dining"
            value={formData.projectScope || ''}
            onChange={handleChange}
          />

          <Textarea
            label="Your Vision & Ideas (Optional)"
            name="vision"
            placeholder="Describe your creative ideas, material preferences, lifestyle goals, or spatial challenges..."
            value={formData.vision || ''}
            onChange={handleChange}
            maxLength={3000}
            showCount
            error={fieldErrors.vision}
            helperText="Share any mood board thoughts, light preferences, or functional needs."
          />
        </div>
      )}

      {/* STEP NAVIGATION CONTROLS */}
      <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
        {currentStep > 1 ? (
          <Button
            type="button"
            variant="outline"
            size="md"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            onClick={handlePrevStep}
            disabled={isSubmitting}
            className="font-mono text-xs uppercase"
          >
            Previous
          </Button>
        ) : (
          <Button
            type="button"
            variant="ghost"
            size="md"
            onClick={onCancel}
            disabled={isSubmitting}
            className="font-mono text-xs uppercase"
          >
            Cancel
          </Button>
        )}

        {currentStep < 3 ? (
          <Button
            type="button"
            variant="accent"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={handleNextStep}
            className="font-mono text-xs uppercase"
          >
            Continue to Step {currentStep + 1}
          </Button>
        ) : (
          <Button
            type="submit"
            variant="accent"
            size="md"
            isLoading={isSubmitting}
            rightIcon={<Sparkles className="w-4 h-4" />}
            className="font-mono text-xs uppercase"
          >
            Transmit Project Enquiry
          </Button>
        )}
      </div>
    </form>
  );
};

export default EnquiryForm;
