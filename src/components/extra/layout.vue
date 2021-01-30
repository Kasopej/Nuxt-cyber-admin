<template>
  <div class="grid grid-cols-8">
    <div class="col-span-6 col-start-2 bg-white contentt">
      <div class="flex justify-between items-center px-5" v-if="title">
        <div>
          <div class="sectionmenu">
            <!-- <span class="sectionmenu-item">Home</span> -->
            <span
              class="sectionmenu-item"
              :class="{ active: content }"
              @click.prevent="content = true"
              >Dashboard</span
            >
            <!-- <span class="sectionmenu-item">Members Mangemnet</span> -->
            <span
              class="sectionmenu-item"
              :class="{ active: !content }"
              @click.prevent="content = false"
              >Researcher Management</span
            >
          </div>
        </div>
        <div>
          <button
            type="button"
            @click.prevent="$m.showmodal('newprogram')"
            class="border border-gray-200 font-bold bg_pink color_white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
          >
            {{ title }}
          </button>
        </div>
      </div>
      <div v-else>
        <div class="search">
          <input type="search" placeholder="Search a Program" />
          <i class="fas fa-search"></i>
        </div>
      </div>

      <hr class="w-100" />

      <div class="p-10">
        <slot name="content" v-if="content"></slot>
        <div v-else>
          <div>
            <div class="mb-8 flex justify-center">
              <!-- <p class="font_19 font-bold">Report Members</p> -->
            </div>
            <div>
              <div class="flex mb-6">
                <a
                  href="#"
                  class="font_13 mr-10 font-bold"
                  :class="{ 'pb-3': true, unline_pink: true }"
                  >INVITE A NEW MEMBER</a
                >
                <a href="#" class="font_13 color_gray"
                  >INVITE MEMBERS FROM GROUP</a
                >
              </div>

              <div class="grid grid-cols-3 gap-16 mb-8">
                <div class="col-span-1 flex flex-col justify-center">
                  <label class="font_12 block"
                    >Role <span class="color_pink">*</span></label
                  >

                  <select class="bg-gray-50 mt-1">
                    <option value="0">Select a Role</option>
                    <option value="">Report Auditor</option>
                    <option value="">Report Viewer</option>
                    <option value=""> Report Contributor</option>
                  </select>
                </div>
                <div class="col-span-1 flex flex-col justify-center">
                  <label class="font_12 block"
                    >Username/Email <span class="color_pink">*</span></label
                  >

                  <input
                    type="text"
                    placeholder="Username"
                    class="bg-gray-50 mt-1 form-control"
                  />
                </div>
                <div class="col-span-1 flex flex-col items-end">
                  <button
                    class="bg_pink font_16 px-16 py-3 rounded-md shadow-sm text-white block mt-auto"
                  >
                    Send
                  </button>
                </div>
              </div>

              <span class="font_12"
                >Mandatory Field <span class="color_pink">*</span></span
              >
              <div class="mb-6 mt-3">
                <div class="tab flex mb-7">
                  <a
                    href="#"
                    class="font_13 mr-10 pb-3 color_gray  tracking-wide"
                    :class="{ active: invitation == 'pending' }"
                    @click.prevent="invitation = 'pending'"
                    >PENDING INVITATIONS</a
                  >
                  <a
                    href="#"
                    class="font_13 mr-10 pb-3  color_gray"
                    :class="{ active: invitation == 'accepted' }"
                    @click.prevent="invitation = 'accepted'"
                    >ACCEPTED INVITATIONS</a
                  >
                  <a
                    href="#"
                    class="font_13 mr-10 pb-3  color_gray"
                    :class="{ active: invitation == 'revoked' }"
                    @click.prevent="invitation = 'revoked'"
                    >REVOKED INVITATIONS</a
                  >
                </div>

                <div v-if="invitation == 'pending'">
                  <p class="font_18 my-6">No pending Invitatitons</p>
                  <!-- <p class="font_13 mb-3">
                    Insecure Direct Object Reference (IDOR) (CWE-639) →
                    RemediationInsecure Direct Object Reference (IDOR) (CWE-639)
                    → <span class="color_pink">Pending</span>
                  </p>
                  <p class="font_13 mb-3">
                    Insecure Direct Object Reference (IDOR) (CWE-639) →
                    RemediationInsecure Direct Object Reference (IDOR) (CWE-639)
                    → <span class="color_pink">Pending</span>
                  </p>
                  <p class="font_13 mb-3">
                    Insecure Direct Object Reference (IDOR) (CWE-639) →
                    RemediationInsecure Direct Object Reference (IDOR) (CWE-639)
                    → <span class="color_pink">Pending</span>
                  </p> -->
                </div>
                <div v-if="invitation == 'accepted'">
                  <p class="font_18 my-6">No accepted Invitatitons</p>
                </div>
                <div v-if="invitation == 'revoked'">
                  <p class="font_13 mb-3">
                    <!-- Insecure Direct Object Reference (IDOR) (CWE-639) → -->
                    RemediationInsecure Direct Object Reference (IDOR) (CWE-639)
                    →
                    <span class="color_blue">Revoked</span>
                  </p>
                  <p class="font_13 mb-3">
                    <!-- Insecure Direct Object Reference (IDOR) (CWE-639) → -->
                    RemediationInsecure Direct Object Reference (IDOR) (CWE-639)
                    →
                    <span class="color_blue">Revoked</span>
                  </p>
                  <p class="font_13 mb-3">
                    <!-- Insecure Direct Object Reference (IDOR) (CWE-639) → -->
                    RemediationInsecure Direct Object Reference (IDOR) (CWE-639)
                    →
                    <span class="color_blue">Revoked</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  props: ["title"],
  data() {
    return {
      content: true,
      invitation: "pending",
    };
  },
};
</script>

<style>
.search {
  position: relative;
}
.search input {
  width: 100%;
  padding: 1rem 2rem;
  /* background: rgb(255, 255, 255); */
  text-indent: 2rem;
}
.search i {
  position: absolute;
  left: 1rem;
  top: 35%;
}
.sectionmenu .active {
  padding: 1rem 0rem;
  border-bottom: 5px solid #da04f2;
}
.sectionmenu .sectionmenu-item {
  cursor: pointer;
}
.sectionmenu .sectionmenu-item:hover {
  color: #da04f2;
}
.tab .active {
  border-bottom: 1px solid #da04f2;
  color: black;
  font-weight: 800;
}
</style>
