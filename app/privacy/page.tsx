"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <div className="mx-auto p-10">
        {/* <Header /> */}
        <h2 className="text-center font-bold text-4xl my-5">Privacy Policy</h2>
        <p className="text-sm text-gray-500 text-center w-3/4 mx-auto my-5">
          Walk The Isle ("we", "us", or "our") respects the privacy of our users
          ("you", "your", or "yours"). This Privacy Policy describes the
          information we collect from users of our mobile application ("App")
          and how we use and disclose that information.
        </p>
        <h3 className="text-2xl font-semibold text-center">
          Information We Collect:
        </h3>
        <p className=" text-gray-500 text-center">
          We collect the following types of information from users of the App:
        </p>
        <h4 className="text-xl font-semibold">Personal Information:</h4>
        <p className="text-sm text-gray-500">
          When you create an account on the App, we may collect certain personal
          information, such as your name, email address, and profile picture.
          Usage Data: We may collect information about how you use the App, such
          as the features you access, the content you view, and the time you
          spend on the App. Device Information: We may collect information about
          the device you use to access the App, such as the device type,
          operating system, IP address, and unique device identifier. Photo and
          Video Data: You may choose to upload photos and videos to the App for
          wedding planning and sharing purposes.
        </p>
        <h3 className="text-2xl font-semibold text-center">
          How We Use Your Information:
        </h3>
        <p className=" text-gray-500 text-center">
          We use the information we collect from you for the following purposes:
        </p>
        <p className="text-sm text-gray-500">
          👉 To provide and operate the App and its features.
        </p>

        <p className="text-sm text-gray-500">
          👉 To personalize your experience with the App.
        </p>

        <p className="text-sm text-gray-500">
          👉 To communicate with you about your use of the App.
        </p>

        <p className="text-sm text-gray-500">
          👉 To analyze how the App is used and improve our services.
        </p>

        <p className="text-sm text-gray-500">
          👉 To comply with legal and regulatory obligations.
        </p>
        <h4 className="text-xl font-semibold">Sharing Your Information:</h4>
        <p className="text-sm text-gray-500">
          We may share your information with third-party service providers who
          help us operate the App and provide our services. These service
          providers are contractually obligated to keep your information
          confidential and secure.
        </p>
        <p className="text-sm text-gray-500">
          We may also share your information with other users of the App, but
          only to the extent that you have chosen to share this information
          publicly. For example, if you upload a photo to the App and choose to
          share it with other users, that photo will be visible to those users.
        </p>
        <p className="text-sm text-gray-500">
          We will not share your information with any third party for marketing
          purposes without your consent.
        </p>
        <h4 className="text-xl font-semibold">Data Retention:</h4>
        <p className="text-sm text-gray-500">
          We will retain your information for as long as your account is active
          or as needed to provide you with the services you request. We may also
          retain your information for an additional period of time to comply
          with legal or regulatory obligations, or for internal audit purposes.
        </p>
        <h4 className="text-xl font-semibold">Your Choices:</h4>
        <p className="text-sm text-gray-500">
          You have the following choices with respect to your information:
        </p>
        <p className="text-sm text-gray-500">
          You can access and update your personal information through your
          account settings.
        </p>
        <p className="text-sm text-gray-500">
          You can choose to stop sharing certain types of information with us by
          adjusting your privacy settings in the App.
        </p>
        <p className="text-sm text-gray-500">
          You can delete your account at any time by contacting us.
        </p>
        <h4 className="text-xl font-semibold">Security:</h4>
        <p className="text-sm text-gray-500">
          We take reasonable steps to protect your information from unauthorized
          access, disclosure, alteration, or destruction. However, no internet
          or electronic storage system is 100% secure. We cannot guarantee the
          security of your information.
        </p>
        <h4 className="text-xl font-semibold">Children's Privacy:</h4>
        <p className="text-sm text-gray-500">
          Our App is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13. If you
          are a parent or guardian and you believe that your child has provided
          us with personal information, please contact us. We will delete any
          such information from our servers.
        </p>
        <h4 className="text-xl font-semibold">
          Changes to this Privacy Policy:
        </h4>
        <p className="text-sm text-gray-500">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on the App.
        </p>
        <h4 className="text-xl font-semibold">Contact Us:</h4>
        <p className="text-sm text-gray-500">
          If you have any questions about this Privacy Policy, please contact us
          at [Insert Email Address].
        </p>
        <h4 className="text-xl font-semibold">Additional Notes:</h4>
        <p className="text-sm text-gray-500">
          You may want to add a section about international data transfers if
          your app stores data outside the user's region.
        </p>

        <p className="text-sm text-gray-500">
          You may also want to include a section about your use of cookies or
          other tracking technologies.
        </p>
        <p className="text-sm text-gray-500">
          It's important to consult with a lawyer to ensure your privacy policy
          complies with all applicable laws and regulations.
        </p>
        <p className="text-sm text-gray-500">
          This Privacy Policy is a sample and should be adapted to fit the
          specific features and functionalities of your Walk The Isle app.
        </p>
      </div>
      <Footer />
    </>
  );
}
