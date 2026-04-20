import { useState } from 'react';
import { Upload, X, CircleCheck as CheckCircle, FileText, Smartphone, CircleAlert as AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PrescriptionUpload = () => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    // Mock upload simulation
    setStep(2);
    setTimeout(() => setStep(3), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-border-base shadow-premium overflow-hidden">
      <div className="bg-primary p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Prescription Portal</h2>
        <p className="text-primary-light text-sm">Upload your prescription and we'll process your order instantly.</p>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="border-2 border-dashed border-primary/20 rounded-2xl p-12 bg-primary/5 flex flex-col items-center justify-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-medical flex items-center justify-center text-primary">
                  <Upload size={32} />
                </div>
                <div>
                  <p className="text-lg font-bold text-text-primary">Drag & Drop Prescription</p>
                  <p className="text-sm text-text-muted mb-4">Support: PDF, JPEG, PNG (Max 5MB)</p>
                  <button 
                    onClick={handleUpload}
                    className="btn-primary"
                  >
                    Select from Gallery
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-canvas border border-border-base">
                  <div className="text-primary"><FileText size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">What is a valid prescription?</h4>
                    <p className="text-xs text-text-muted mt-1">Must include Doctor's name, degree, signature and date.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-canvas border border-border-base">
                  <div className="text-primary"><Smartphone size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">Why upload prescription?</h4>
                    <p className="text-xs text-text-muted mt-1">Required for Schedule H & X drugs as per Indian Law.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center gap-6"
            >
              <div className="relative w-24 h-24">
                <svg className="w-full h-full rotate-[-90deg]">
                  <circle
                    className="text-primary-light"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="48"
                    cy="48"
                  />
                  <circle
                    className="text-primary animate-progress"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset="251.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="48"
                    cy="48"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-primary">
                  75%
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Uploading your prescription...</h3>
                <p className="text-sm text-text-muted">Analyzing the image for medicine details.</p>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center gap-6"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <CheckCircle size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">Upload Successful!</h3>
                <p className="text-sm text-text-muted max-w-sm mx-auto">
                  Our certified pharmacist will review your prescription and add the medicines to your cart within 15 minutes.
                </p>
              </div>
              <div className="bg-canvas border border-border-base rounded-xl p-4 w-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded border border-border-base flex items-center justify-center text-text-muted">
                    <FileText size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-text-primary">prescription_2026.jpg</div>
                    <div className="text-[10px] text-text-muted">Uploaded on 20 Apr, 2026</div>
                  </div>
                </div>
                <button onClick={() => setStep(1)} className="text-text-muted hover:text-danger p-2">
                  <X size={18} />
                </button>
              </div>
              <button className="btn-primary w-full">View Order Progress</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-warning/5 border-t border-warning/10 p-4 flex gap-3">
        <AlertCircle size={18} className="text-warning shrink-0 mt-0.5" />
        <p className="text-[10px] text-warning/80 font-medium leading-relaxed">
          WARNING: MediCare does not dispense medicines without a valid prescription. Any forged or invalid prescription will lead to order cancellation.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          to { stroke-dashoffset: 62.8; }
        }
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default PrescriptionUpload;
