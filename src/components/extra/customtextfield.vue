<template>
  <div class="bg-white shadow-md rounded-sm mb-7">
    <div class="flex justify-between py-4 px-7 border-b-2 post__header">
      <div class="flex-5">
        <div class="flex  items-center">
          <slot name="tab" class="flex-1"></slot>
          <slot name="select" class="flex-2"></slot>
        </div>
      </div>
      <div class="flex-2 flex items-center font_14 ">
        <p>
          Styling with
          <span class="font_12 color_pink">MarkDown is supported</span>
        </p>
      </div>
    </div>
    <div class="h-52 p-3">
      <textarea
        v-model="content"
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
  },
};
</script>

<style>

@media screen and (max-width: 51.25em) { /** 820px /16 */
  .post__header{
    flex-direction: column;
  }
}
</style>
