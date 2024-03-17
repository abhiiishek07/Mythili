import React from "react";

const CopyrightPolicyPage = () => {
  return (
    <div className="p-4 flex items-center">
      <div className="max-w-6xl w-full mx-auto border rounded-md my-4 p-4">
        {" "}
        <h1 className="text-2xl font-bold mb-4">Copyright Policy</h1>
        <div className="text-base text-gray-700">
          <p className="mb-4">
            [Your Real Estate Website] respects the intellectual property rights
            of others and expects its users to do the same. It is our policy to
            respond to notices of alleged copyright infringement that comply
            with applicable intellectual property law (including the Digital
            Millennium Copyright Act) and to terminate the accounts of repeat
            infringers.
          </p>
          <h2 className="text-lg font-semibold mb-2">
            1. Reporting Claims of Copyright Infringement
          </h2>
          <p className="mb-4">
            If you believe that material or content residing on or accessible
            through [Your Real Estate Website] infringes a copyright, please
            send a notice of copyright infringement containing the following
            information to the designated agent listed below:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>
              A physical or electronic signature of a person authorized to act
              on behalf of the owner of the copyright that has been allegedly
              infringed;
            </li>
            <li>Identification of works or materials being infringed;</li>
            <li>
              Identification of the material that is claimed to be infringing
              including information regarding the location of the infringing
              materials that the copyright owner seeks to have removed, with
              sufficient detail so that [Your Real Estate Website] is capable of
              finding and verifying its existence;
            </li>
            <li>
              Contact information about the notifier including address,
              telephone number, and, if available, email address;
            </li>
            <li>
              A statement that the notifier has a good faith belief that the
              material is not authorized by the copyright owner, its agent, or
              the law; and
            </li>
            <li>
              A statement made under penalty of perjury that the information
              provided is accurate and the notifying party is authorized to make
              the complaint on behalf of the copyright owner.
            </li>
          </ul>
          <h2 className="text-lg font-semibold mb-2">2. Designated Agent</h2>
          <p className="mb-4">
            Name: [Your Designated Agent&apos;s Name]
            <br />
            Address: [Your Address]
            <br />
            Email: [Your Designated Agent&apos;s Email]
            <br />
            Phone: [Your Designated Agent&apos;s Phone Number]
          </p>
          <p className="mb-4">
            Please note that you may be liable for damages (including costs and
            attorneys fees) if you materially misrepresent that material or
            activity is infringing your copyright.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightPolicyPage;
