import Link from "next/link";
import React, { useState } from "react";
import { FaFileSignature } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";

const TermsAndCondition = () => {
  return (
    <div className="w-full min-h-screen flex justify-center px-3">
      <div className="flex flex-col w-full max-w-6xl  my-">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className=" w-fit font-bold text-3xl flex items-center gap-2 justify-center py-2 mt-3">
          <p> Terms and Conditions </p>
          <FaFileSignature />
        </div>
        <div className="w-full rounded-lg">
          <img
            src="https://blog.mugafi.com/wp-content/uploads/2021/05/fingers-note-report-journalist-filling-scaled.jpg"
            alt="contact us"
            className="rounded-md object-cover h-80 w-full"
          />
        </div>
        <div className="max-w-6xl prose flex flex-col tetx-lg py-4">
          These Terms and Conditions ("Terms") govern your use of [Your Real
          Estate Website], accessible at [Website URL]. Please read these Terms
          carefully before accessing or using the website. Your access to and
          use of the service is conditioned on your acceptance of and compliance
          with these Terms. By accessing or using the service, you agree to be
          bound by these Terms. If you disagree with any part of the terms, then
          you may not access the service.
          <p className="font-bold text-lg pt-4">1. Agreement to Terms</p>
          By accessing or using the [Your Real Estate Website], you agree to be
          bound by these Terms and all applicable laws and regulations. If you
          do not agree with any of these Terms, you are prohibited from using or
          accessing this site.
          <p className="font-bold text-lg pt-4">2. Use License</p>
          a. Permission is granted to temporarily download one copy of the
          materials (information or software) on [Your Real Estate Website] for
          personal, non-commercial transitory viewing only. This is the grant of
          a license, not a transfer of title, and under this license, you may
          not: i. Modify or copy the materials; ii. Use the materials for any
          commercial purpose or for any public display (commercial or
          non-commercial); iii. Attempt to decompile or reverse engineer any
          software contained on [Your Real Estate Website]; iv. Remove any
          copyright or other proprietary notations from the materials; or v.
          Transfer the materials to another person or "mirror" the materials on
          any other server. b. This license shall automatically terminate if you
          violate any of these restrictions and may be terminated by [Your Real
          Estate Website] at any time. Upon terminating your viewing of these
          materials or upon the termination of this license, you must destroy
          any downloaded materials in your possession whether in electronic or
          printed format.
          <p className="font-bold text-lg pt-4">3. Disclaimer</p>
          a. The materials on [Your Real Estate Website] are provided on an 'as
          is' basis. [Your Real Estate Website] makes no warranties, expressed
          or implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights. b. Further,
          [Your Real Estate Website] does not warrant or make any
          representations concerning the accuracy, likely results, or
          reliability of the use of the materials on its website or otherwise
          relating to such materials or on any sites linked to this site.
          <p className="font-bold text-lg pt-4">4. Limitations</p>
          In no event shall [Your Real Estate Website] or its suppliers be
          liable for any damages (including, without limitation, damages for
          loss of data or profit, or due to business interruption) arising out
          of the use or inability to use the materials on [Your Real Estate
          Website], even if [Your Real Estate Website] or a [Your Real Estate
          Website] authorized representative has been notified orally or in
          writing of the possibility of such damage.
          <p className="font-bold text-lg pt-4">5. Revisions and Errata</p>
          The materials appearing on [Your Real Estate Website] could include
          technical, typographical, or photographic errors. [Your Real Estate
          Website] does not warrant that any of the materials on its website are
          accurate, complete, or current. [Your Real Estate Website] may make
          changes to the materials contained on its website at any time without
          notice. [Your Real Estate Website] does not, however, make any
          commitment to update the materials.
          <p className="font-bold text-lg pt-4">6. Links</p>
          [Your Real Estate Website] has not reviewed all of the sites linked to
          its website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by [Your
          Real Estate Website] of the site. Use of any such linked website is at
          the user's own risk.
          <p className="font-bold text-lg pt-4">7. Modifications</p>
          [Your Real Estate Website] may revise these Terms of Service for its
          website at any time without notice. By using this website, you are
          agreeing to be bound by the then-current version of these Terms and
          Conditions.
          <p className="font-bold text-lg pt-4">8. Governing Law</p>
          These terms and conditions are governed by and construed in accordance
          with the laws of [Your Country/State] and you irrevocably submit to
          the exclusive jurisdiction of the courts in that State or location. By
          accessing or using the services provided by [Your Real Estate
          Website], you agree to abide by these Terms and Conditions. If you do
          not agree with any part of these Terms and Conditions, you must not
          access or use the services provided by [Your Real Estate Website].
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
