<template>
  <div class="bg-white shadow-md rounded-sm mb-7">
    <div class="flex justify-between py-4 px-7 border-b-2 post__header">
      <div class="flex-5">
        <div class="flex  items-center">
          <div class="flex-2">
            <slot name="tab"></slot>
          </div>
          <div class="flex-4">
            <slot name="select"></slot>
          </div>
        </div>
      </div>
      <div class="flex-2 flex items-center font_14 ">
        <p>
          Styling with
          <span class="font_12 color_pink">MarkDown is supported</span>
        </p>
      </div>
    </div>
    <div class="p-3">
      <textarea
        v-model="content"
        rows="12"
        class="w-full h-full border-none p-5"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "customtextfield",
  props: ["item"],
  data() {
    return {
      content: "",
      message: [
        {
          tag: `Accepted > Resolved`,
          message: `Hello, Thanks to your findings, we were able to fix this vulnerability.Your report is now closed as Resolved. Regards,`,
        },
        {
          tag: `Underreview > Duplicate`,
          message: `Hello, Thanks for your submission and for the time spent on that report. We appreciate your help but another hunter already submitted the same bug. Your report is closed with status ‘Duplicate’, and for that you will receive 1 ranking point. We hope that you will keep on participating in our program and we wish you better luck in your next findings.  Regards,`,
        },
        {
          tag: `Underreview > Thanks`,
          message: `Hello, 
Thanks for your first submission on our program. 
Unfortunately, we cannot consider your report as valid, based on our program’s rules.  
You report is closed with status ‘Thanks’, so that you don’t loose ranking points. 
We hope that you will keep on participating in our program and we wish you better luck in your next findings.    
Regards,`,
        },
        {
          tag: `Asked for fix verify > Resolved`,
          message: `Hello, 
Thanks for your verification. 
This report is now closed as Resolved. 
Regards,`,
        },
        {
          tag: `Accepted > Asked for fix verify`,
          message: `Hello, 
A fix has been deployed for this vulnerability. 
Could you please verify that you cannot reproduce the bug nor bypass the fix ?  
Thanks for your help,
Regards,`,
        },
        {
          tag: `Under Review > Accepted`,
          message: `Hello, 
We were able to reproduce the PoC and we decided to accept your report. 
Your report is therefore eligible for a reward – stay tuned.  
Congrats/Cheers,`,
        },
        {
          tag: `New > Under review`,
          message: `Hello, 
Thanks for your submission
Your report will be reviewed by our team and updated in a timely manner. 
Regards,`,
        },
        {
          tag: `Use Short Template`,
          message: `Policy Rule
No technology is perfect, and Name_of_Company believes that working with skilled security researchers across the globe is crucial in identifying weaknesses in any technology. If you believe you've found a security issue in our product or service, we encourage you to notify us. We welcome working with you to resolve the issue promptly. 
Disclosure Policy
	• Let us know as soon as possible upon discovery of a potential security issue, and we'll make every effort to quickly resolve the issue. 
	• Provide us a reasonable amount of time to resolve the issue before any disclosure to the public or a third-party. 
	• Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service. Only interact with accounts you own or with explicit permission of the account holder. 
Exclusions
While researching, we'd like to ask you to refrain from: 
	• Automated scanning tools
	• Denial of service 
	• Spamming 
	• Social engineering (including phishing) of Name_of_Company staff or contractors 
	• Any physical attempts against Name_of_Company property or data centers 
	• Best practice concerns not accompanied by in scope exploits (e.g. missing HTTP headers, outdated software, etc.)
	• Generic email spoofing issues
	• Vulnerabilities in third parties used by Name_of_Company 
	• blog.earny.com and support.earny.com are excluded from this program
Safe Harbor
Any activities conducted in a manner consistent with this policy will be considered authorized conduct and we will not initiate legal action against you. If legal action is initiated by a third party against you in connection with activities conducted under this policy, we will take steps to make it known that your actions were conducted in compliance with this policy. 
Thank you for helping keep Name_of_Company and our users safe!`,
        },
        {
          tag: `Use Detail Template`,
          message: `POLICY RULE
•	An asset must be listed as reward eligible in our Scopes section of the policy to qualify for a bounty.
•	Only reports closed as Resolved will qualify for a bounty.
•	Exact payouts within each range are determined by calculations related to the CVSS3 score for the individual report.
•	Reports prior to September 28th, 2020 may have used a CVSS calculation impacted by a setting in Teklabspace that adjusted the environmental score. Due to the platform limitations related to how this functions and is displayed, the severity and reward may appear inconsistent.
 
•	Reports that were triaged or rewarded based on prior program policy versions, rules and processes should not be used for comparison against current reports.
•	Last updated on September 28, 2020. 
 
Policy
Company_Name believes in a program that fosters collaboration among security professionals to help protect our systems and customers’ personal information from malicious activity and to help set security policies across our organization. We value the security and safety of our customers’ personal information above all. 
For the protection of our customers, Company_Name does not publicly disclose, discuss, or confirm security matters before comprehensively investigating, diagnosing, and fixing any known issues.
 

 
Table of Contents

 
Program
1.	Legal
2.	Program Eligibility
3.	Program Rules
Report Submissions
1.	What is required when submitting a report?
2.	What happens after you submit a report?
3.	How do I make my report great?
4.	What causes a report to be closed as Informative, Duplicate, N/A, or Spam?
Helpful Hints
FAQ's
 
Program

 
1. Legal
Company_Name reserves the right to modify terms and conditions of this program and your participation in the program constitutes acceptance of all terms. Please check this site regularly as we routinely update our program terms and eligibility, which are effective upon posting. We reserve the right to cancel this program at any time. Must be 18 or older to be eligible for an award.
2. Program Eligibility
•	You must agree and adhere to the Program Rules and Legal terms as stated in this policy.
•	You must be the first to submit a sufficiently reproducible report for an issue in order to be eligible for a bounty.
•	You must be available to supply additional information, as needed by our team, to reproduce and triage the issue.
•	Zero-day vulnerabilities will not be considered for eligibility until more than 30 days have passed since patch availability.
•	Out-of-scope vulnerability reports may be addressed as a form of vulnerability disclosure but will generally not be considered reward eligible.
•	Company_Name partners (employees) and vendors are not eligible for participation in this program.
3. Program Rules
Do
•	Read and abide by the program policy.
•	Perform testing using only accounts that are your own personal/test accounts or an account that you have the explicit permission from the account holder to utilize.
•	Exercise caution when testing to avoid negative impact to customers and the services they depend on.
•	Stop when unsure. If you think you may cause, or have caused, damage with testing a vulnerability, report your initial finding(s) and request authorization to continue testing.
Do NOT
•	Do not Brute force credentials or guess credentials to gain access to systems.
•	Do not participate in denial of service attacks.
•	Do not upload shells or create a backdoor of any kind.
•	Do not engage in any form of social engineering of Company_Name employees, customers, or vendors.
•	Do not engage or target any Company_Name employee, customer or vendor during your testing.
•	Do not attempt to extract, download, or otherwise exfiltrate data which you believe may have PII other than your own. 
•	Do not change passwords of any account that is not yours or that you do not have explicit permission to change. If ever prompted to change a password, stop and report the finding immediately. 
•	Do not publicly disclose vulnerability reports that are not resolved and approved for disclosure by Company_Name.
•	Do not submit reports here as a means to engage us to buy your products or services. Please direct your sales inquiries through proper channels.

 
Report Submissions

 
1. What is required when submitting a report?
Provide the information asked for by the new report form, following the instructions there. Some important considerations include:
•	Title – this should be a quick and clear summary of your issue.
•	Asset – this should match exactly the asset you are reporting, or “Other”.
•	Severity – the CVSS calculator is used to evaluate severity and bounty, so to avoid disappointment, be honest and critical when scoring severity.
•	Weakness – select the most appropriate vulnerability type. 
•	Description – provide all the requested fields.
2. What happens after you submit a report?
Teklabspace triage staff will perform the initial validation of your report. They will confirm it is well understood, reproducible, has security impact, and is otherwise in line with our program policy and scope.
Teklabspace triage may close the report as "Duplicate", "Informative", "N/A", "Spam", or continue to work with you if more information is needed. They will not move the report to "Triaged".
 Once validated by Teklabspace, the triager will assign the report to Company_Name, letting you know in the report with a short message to that effect. 
The Company_Name team will then review your report. We will be working on the issue but may not have enough information to immediately move it from "New" to "Triage". As a global company, we often need to engage with teams across multiple time zones so we may need additional time to fully validate the report. 
Company_Name will "Triage" valid & eligible reports that we intend to take action on. During this time, we will work with our internal teams to resolve the issue and follow up to close the report as "Resolved".
Rewards
Reward amounts are calculated based on the numerical CVSS score assigned to the report.
We strive to pay bounty on "Triage" and will do so when there is high confidence in the accuracy of the assigned scope and severity. Occasionally, we may need to delay payment until we fully investigate the details of a report.
•	All bounty amounts will be at the discretion of the Company_Name Bug Bounty team.
•	Reports submitted using methods that violate policy rules will not be eligible for reward.
•	To be eligible for a reward, the report must be for a reward eligible asset as defined in the scope section of our policy.
 
•	Reports where the researcher has confirmed and reported the same vulnerability on multiple assets, with the same root cause, may qualify for a 1.5 multiplier on their bounty award. Do not submit duplicate reports for the same issue across multiple sites as the duplicates will be closed and the issue will be treated as one report.
•	While we aim for consistency, previous reports and prior bounty amounts do not set a precedent and are not to be used for negotiating a higher reward. Changes to policy and the occasional human error should be considered.
•	Understand that there could be submissions for which we accept the risk, have other compensating controls, or will not address in the manner expected.
Disclosure Requests
Once Name_of_Company receives your official disclosure request, we may take the following actions:
•	Redact any sensitive information.
•	Include a Name_of_Company provided summary.
•	Make adjustments to report metadata to ensure clarity and accuracy, if needed.
Only reports for in-scope assets that have been closed as 'Resolved' will be considered for disclosure. 
Disclosure requests must be received within 90 days of the report being closed as 'Resolved'.
3. How do I make my report great?
Great reports lead to quicker resolution and more accurate reward.
•	Clearly describe the impact your finding would have on Company_Name assets or Company_Name customers and how this could be exploited.
•	Utilize the CVSS v3 calculator to thoughtfully score your report. 
•	Include detailed and easy to follow reproduction steps along with screenshots and videos to support your finding. 
•	Be sure to include the environment used for testing (browsers, app version devices, tools, configuration), any accounts used during testing and also provide your IP address if reporting on an asset that might be logging that information so that we can easily filter your results to help validate your report.
•	Include your recommendations to resolve the issue.
•	Be responsive to requests for additional information.
•	Participate in validation and testing efforts once the Company_Name team advises the issue has been resolved.
•	Always be polite and respectful to Teklabspace and Company_Name team members.
4. What causes a report to be closed as Informative, Duplicate, N/A or Spam?
These are just some examples of what may drive your report to a particular type of closure and are not intended to form a complete list.
Spam
•	Incomprehensible, abusive behavior or harassment within a report, or reports clearly having no effort to identify a security impact may be closed out as Spam.
•	Submitting reports with an apparent intent to sell a product or service to detect or prevent the vulnerabilities described in the report are likely to be closed as Spam.
Duplicate
•	When reports on the same asset using the same attack vector/exploit are received, only the first report received is triaged. All other subsequent reports will be marked as a duplicate.
•	A vulnerability reported on one domain may exist on another domain if the sites share the platform. For example, an issue reported for Company_Name.com may also be present in the exact same way on Company_Name.ca and the issue can be resolved on both sites with the same fix. We treat the issue as one bug and will close out others as duplicates. Rest assured; we do take the existence of the vulnerability present on multiple sites into consideration during reward time.
Informative
•	Issues with minimal impact or relating to common security practices that are not prioritized for remediation.
 
•	Reports notifying us of broken links or abandoned Social Media accounts.
•	Reports submissions might have a perceived security impact externally but internally Company_Name may have compensating controls.
•	Issues which are not consistently reproducible. If reports cannot be reproduced and are not actionable, we may close as informative. It is possible to re-open those reports at a later date when new information is presented.
•	Notification of an existing indication of compromise. For example, if you report a subdomain takeover you encounter but did not execute yourself, this would be closed as informative.
N/A
•	Violating program rules defined by Teklabspace or those defined within this Company_Name program policy.
•	Reports submitted for assets that clearly do not belong to Company_Name.
•	Reports identifying issues described in our list of Exclusions.
•	Reports describing issues are not exploitable, require social engineering, or depend on other unlikely interactions.
•	SDTO reports without a working proof of concept confirming you have control over the subdomain in question.
•	Information disclosures that might have the word Company_Name in it (student projects in Github, etc.) but clearly do not belong to Company_Name or do not present security impact.
Exclusions
 Company_Name reserves the right to add to and subtract from the Exclusions list depending on the evaluated severity of reported vulnerabilities and risk acceptance.
•	Reports from automated tools or scans.
•	Reports of credentials exposed by other data breaches / known credential lists.
•	Mail configuration issues including SPF, DKIM, DMARC settings and reports pertaining to external mail service providers. 
•	Reports about insecure SSL/TLS configuration.
•	Descriptive error messages or headers (e.g. Stack Traces, application or server errors, banner grabbing).
•	Presence of publicly accessible login pages.
•	Use of outdated software/library versions.
•	Use of a known-vulnerable library without a description of an exploit specific to our implementation.
•	OPTIONS/TRACE HTTP method enabled.
•	Disclosure of known public files or directories.
•	Presence of autocomplete functionality in form fields.
•	Cookies that lack HTTP Only or Secure settings.
•	Clickjacking and issues only exploitable through clickjacking.
•	Attacks requiring physical access to a user's device or MITM attacks.
•	Attacks dependent upon social engineering of Company_Name employees or vendors.
•	Username enumeration based on login, forgot password, account creation and registration pages.
•	Password or account recovery policies, such as reset link expiration or password complexity.
•	Session management concerns such as session duration, concurrent active sessions or session invalidation triggers.
•	Lack of email address verification during account registration.
•	Enforcement policies for brute force or account lockout.
•	Rate-limiting issues.
•	Lack of crossdomain.xml, p3p.xml, robots.txt or any other policy files and/or wildcard. presence/misconfiguration in these.
•	Configuration of or missing security headers.
•	Mixed content issues.
•	CSRF on logout.
•	CSRF on forms that are available to anonymous users.
•	Self-XSS and issues exploitable only through Self-XSS.
•	Content spoofing/text injection.
•	Hyperlink injection in emails using forms available to any user. 
•	Lack of obfuscation in mobile apps.
•	Absence of certificate pinning.
•	Lack of jailbreak detection in mobile apps.

 
Helpful Hints

 
•	Read & follow the rules.
•	Generating fraudulent Company_Name Card reloads or coupons, or simply getting free coffee, in an effort to "steal money from Company_Name" is typically not evaluated as a critical issue. 
•	Valid reports would be the type of report that identifies security impacts such that you’d find in the OWASP top 10: https://owasp.org/www-project-top-ten/ and mobile top 10: https://owasp.org/www-project-mobile-top-10/.
•	If your motivation is financial compensation, you are more likely to receive a bounty by finding and demonstrating a security impact within the published scope than by submitting a bug that's outside of scope and trying to convince us why you believe it’s a security impact to Company_Name.
Appropriate Proof of Concepts
•	SQLi  - A sleep command (or equivalent) is often enough. Do not attempt to read or modify data that does not belong to you.
•	RCE  - A whoami (or equivalent) command is enough. Do not perform additional actions. Do not alter or delete any files on the system.
•	Subdomain Takeovers (SDTO) – You are required to demonstrate that the domain has been taken over by you and is still in your possession – this avoids false positives and claim-jumping. A valid demonstration is a Proof of Concept html file hosted by you on the site with your Teklabspace username. Our preference is for you to place your hosted proof of concept in a sub-directory and include your Teklabspace username as a comment in the markup rather than having the file be the primary landing page of the domain. Ensure to include the URL to this file in your report. SDTO reports submitted by you in which you cannot demonstrate your ownership of the domain are not reward eligible. 

 
FAQ's

 
1.	Can I get Company_Name swag? 
•	Company_Name does not currently offer swag.
2.	Can Company_Name provide me with a pre-configured test account or Company_Name card(s)? 
•	Company_Name does not offer test accounts or test cards.
3.	Are all APIs / endpoints initiated by an in-scope mobile or web application eligible for bounty? 
•	No. Some APIs accessed by Company_Name applications are not developed or maintained by Company_Name application development teams. If reported through our program and we can act to mitigate a vulnerability, we may triage the report as a valid finding, but it would not be eligible for bounty.
How to proceed in this situation:
Set the asset type to the primary application you were testing. Ensure that your write up, includes the specifics for your proof of concept detailing:
•	How you tested this
•	Which back end API call(s) had the vulnerability
Company_Name will review the report and determine whether it remains in-scope and bounty eligible under that primary asset.
A mobile application example can be found within our current scope:
 Android Play Store: com.companyName.nigeria
 Assets eligible for bounty referenced directly by this app:
 https://mobile.companyName.com.sg
A web application example might constitute calls to a back-end API via JavaScript as part of the application process flow. If the API had the vulnerability, but was initiated by the web application, then this would be considered when determining if it is bounty eligible.
Thank you for helping keep Company_Name and our users safe!`,
        },
      ],
    };
  },
  watch: {
    item(value) {
      if (value) {
        let a = this.message.find((i) => i.tag == value);
        this.content = a.message;
      }
    },
    content(value) {
      if (value) {
        this.$emit("dataToParent", value);
      }
    },
  },
};
</script>

<style>
@media screen and (max-width: 51.25em) {
  /** 820px /16 */
  .post__header {
    flex-direction: column;
  }
}
</style>
