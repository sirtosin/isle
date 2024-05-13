import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <div className="mx-auto p-10">
        <h2 className="text-center font-bold text-4xl my-5">
          Terms and Conditions
        </h2>
        <p className="text-sm text-gray-500 text-center w-3/4 mx-auto my-5">
          These Terms and Conditions ("Terms") govern your use of the Walk The
          Isle mobile application ("App"). By downloading or using the App, you
          agree to be bound by these Terms. If you disagree with any part of
          these Terms, then you may not access or use the App.
        </p>
        <h4 className="text-xl font-semibold">Use of the App</h4>
        <p className="text-sm text-gray-500">
          You must be at least 13 years old to use the App.
        </p>{" "}
        <p className="text-sm text-gray-500">
          You are responsible for creating a secure and confidential password
          for your account.
        </p>{" "}
        <p className="text-sm text-gray-500">
          You are responsible for all activity that occurs under your account.{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          You agree to use the App in a lawful and respectful manner.
        </p>{" "}
        <p className="text-sm text-gray-500">
          You agree not to use the App for any illegal or unauthorized purpose.
        </p>{" "}
        <p className="text-sm text-gray-500">
          You agree not to upload any content that is infringing, obscene,
          defamatory, threatening, or hateful{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          You agree not to spam or harass other users of the App.{" "}
        </p>
        <h4 className="text-xl font-semibold"> User Content</h4>{" "}
        <p className="text-sm text-gray-500">
          You retain all ownership rights to the content you upload to the App
          ("User Content").{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          By uploading User Content, you grant Walk The Isle a non-exclusive,
          worldwide, royalty-free license to use, reproduce, modify, publish,
          and distribute your User Content in connection with the App.{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          You are responsible for ensuring that you have the right to upload all
          User Content that you submit to the App.
        </p>
        <h4 className="text-xl font-semibold"> Third-Party Services </h4>{" "}
        <p className="text-sm text-gray-500">
          The App may integrate with third-party services.{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          Your use of these third-party services may be subject to their own
          terms and conditions.{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          Walk The Isle is not responsible for the content or practices of any
          third-party services.
        </p>
        <h4 className="text-xl font-semibold"> Intellectual Property </h4>{" "}
        <p className="text-sm text-gray-500">
          The App and all its content, including but not limited to text,
          graphics, logos, images, and software, are the property of Walk The
          Isle or its licensors and are protected by copyright, trademark, and
          other intellectual property laws.{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          You may not modify, reverse engineer, decompile, disassemble, or
          otherwise attempt to extract the source code of the App.{" "}
        </p>
        <h4 className="text-xl font-semibold"> Disclaimer </h4>{" "}
        <p className="text-sm text-gray-500">
          THE APP IS PROVIDED "AS IS" AND WITHOUT WARRANTY OF ANY KIND, EXPRESS
          OR IMPLIED. WALK THE ISLE DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT
          LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT.{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          WALK THE ISLE DOES NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR
          ERROR-FREE.{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          WALK THE ISLE DOES NOT WARRANT THAT THE APP WILL BE SECURE FROM
          VIRUSES OR OTHER MALICIOUS CODE.{" "}
        </p>{" "}
        <h4 className="text-xl font-semibold">Limitation of Liability </h4>{" "}
        <p className="text-sm text-gray-500">
          IN NO EVENT SHALL WALK THE ISLE, ITS OFFICERS, DIRECTORS, EMPLOYEES,
          OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION
          WITH YOUR USE OF THE APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES.{" "}
        </p>{" "}
        <h4 className="text-xl font-semibold"> Termination </h4>{" "}
        <p className="text-sm text-gray-500">
          Walk The Isle may terminate your access to the App at any time, for
          any reason, or no reason at all.{" "}
        </p>{" "}
        <p className="text-sm text-gray-500">
          You may terminate your use of the App at any time.{" "}
        </p>{" "}
        <h4 className="text-xl font-semibold"> Governing Law </h4>{" "}
        <p className="text-sm text-gray-500">
          These Terms shall be governed by and construed in accordance with the
          laws of [Insert Jurisdiction], without regard to its conflict of law
          provisions.
        </p>{" "}
        <h4 className="text-xl font-semibold">Entire Agreement </h4>{" "}
        <p className="text-sm text-gray-500">
          These Terms constitute the entire agreement between you and Walk The
          Isle regarding your use of the App.{" "}
        </p>{" "}
        <h4 className="text-xl font-semibold">Severability </h4>{" "}
        <p className="text-sm text-gray-500">
          If any provision of these Terms is held to be invalid or
          unenforceable, such provision shall be struck and the remaining
          provisions shall remain in full force and effect.{" "}
        </p>
        <h4 className="text-xl font-semibold"> Amendment </h4>{" "}
        <p className="text-sm text-gray-500">
          Walk The Isle may amend these Terms at any time by posting the amended
          Terms on the App. You are responsible for checking these Terms
          periodically for updates. Your continued use of the App following the
          posting of amended Terms constitutes your acceptance of the amended
          Terms. Contact Us If you have any questions about these Terms, please
          contact us at [Insert Email Address]. Please note: This is a sample
          Terms and Conditions agreement and should be adapted to fit the
          specific features and functionalities of your Walk The Isle app. It's
          important to consult with a lawyer to ensure your Terms and Conditions
          comply with all applicable laws and regulations.
        </p>
      </div>
      <Footer />
    </>
  );
}
