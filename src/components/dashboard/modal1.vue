<template>
    <div>
        <div class="mb-8 flex justify-center">
            <p class="font_19 font-bold">Report Members</p>
        </div>
        <div>
            <div class="flex mb-6">
                <a href="#" class="font_13 mr-10 unline_pink font-bold">INVITE A NEW MEMBER</a>
                <a href="#" class="font_13 color_gray">INVITE MEMBERS FROM GROUP</a>
            </div>

            <div class="grid grid-cols-3 gap-16 mb-8">
                <div class="col-span-1 flex flex-col justify-center">
                    <label class="font_12 block">Role <span class="color_pink">*</span></label>
                    <div class="border shadow-md rounded-md w-full p-2">
                        <select class="w-full">
                            <option value="0">Select a Role</option>
                            <option value="">Report Auditor</option>
                            <option value="">Report Viewer</option>
                        </select>                    
                    </div>
                </div>
                <div class="col-span-1 flex flex-col justify-center">
                    <label class="font_12 block">Username/Email <span class="color_pink">*</span></label>
                    <div class="border shadow-md rounded-md w-full p-2">
                        <input type="text" class="w-full">                    
                    </div>
                </div>
                <div class="col-span-1 flex flex-col items-end">
                    <button class="bg_pink font_16 px-16 py-3 rounded-md shadow-sm text-white block mt-auto">
                        Send
                    </button>
                </div>
            </div>

            <span class="font_12">Mandatory Field <span class="color_pink">*</span></span>
            <div class="mb-6 mt-3">
                <div class="flex mb-7">
                    <a href="#" class="font_13 mr-10 unline_pink font-bold">PENDING INVITATIONS</a>
                    <a href="#" class="font_13 mr-10 color_gray">ACCEPTED INVITATIONS</a>
                    <a href="#" class="font_13 mr-10 color_gray">REVOKED INVITATIONS</a>
                </div>

                <div v-if="invitations">
                    <p class="font_13 mb-3">
                        Insecure Direct Object Reference (IDOR) (CWE-639) → RemediationInsecure Direct Object Reference (IDOR) (CWE-639) → <span class="color_pink">Pending</span>
                    </p>
                    <p class="font_13 mb-3">
                        Insecure Direct Object Reference (IDOR) (CWE-639) → RemediationInsecure Direct Object Reference (IDOR) (CWE-639) → <span class="color_pink">Pending</span>
                    </p>
                    <p class="font_13 mb-3">
                        Insecure Direct Object Reference (IDOR) (CWE-639) → RemediationInsecure Direct Object Reference (IDOR) (CWE-639) → <span class="color_pink">Pending</span>
                    </p>
                    <p class="font_13 mb-3">
                        Insecure Direct Object Reference (IDOR) (CWE-639) → RemediationInsecure Direct Object Reference (IDOR) (CWE-639) → <span class="color_pink">Pending</span>
                    </p>

                </div>
                <p v-else class="font_12 my-6">No pending Invitatitons</p>

                <p class="font_13 mb-3">
                    Insecure Direct Object Reference (IDOR) (CWE-639) → RemediationInsecure Direct Object Reference (IDOR) (CWE-639) → <span class="color_blue">Revoked</span>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'modalone',
    data(){
        return {
            invitations: true
        }
    }
}
</script>

<style>
.unline_pink{
    border-bottom: 1px solid #DA04F2;
}
</style>