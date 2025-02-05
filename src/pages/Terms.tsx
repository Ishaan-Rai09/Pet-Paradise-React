import React from 'react';
import PageTransition from '../components/PageTransition';

export default function Terms() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-indigo">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information
              or software) on Pet Paradise's website for personal, non-commercial transitory viewing only.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The materials on Pet Paradise's website are provided on an 'as is' basis. Pet Paradise
              makes no warranties, expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of intellectual
              property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall Pet Paradise or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on Pet
              Paradise's website.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the
              laws and you irrevocably submit to the exclusive jurisdiction of the courts
              in that location.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}