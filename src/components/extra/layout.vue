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
                  class="font_13 mr-10 color_gray memberTab"
                  @click="toggleMemberTab('member')"
                  :class="{ 'pb-3': true, active: memberTab == 'member' }"
                  >INVITE A NEW MEMBER</a
                >
                <a href="#" class="font_13 color_gray memberTab" :class="{ active: memberTab == 'member_group' }" @click="toggleMemberTab('member_group')"
                  >INVITE MEMBERS FROM GROUP</a
                >
              </div>

              <div v-if="memberTab == 'member' " class="grid grid-cols-3 gap-16 mb-8">
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

              <div v-if="memberTab == 'member_group' " class="w-full mb-8">
                <table class="hallOfFame_table">
                  <thead>
                      <tr>
                          <th>Username</th>
                          <th>Thumbnail</th>
                          <th>Email</th>
                          <th>Verified</th>
                          <th>Points</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>Alisson</td>
                        <td class="flex items-center justify-center">
                            <img class="avatar rounded-full w-6 h-6 inline mr-3"
                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                            alt=""> <span>Semijor</span>
                        </td>
                        <td class="text-orange-600">alisson@gmail.com</td>
                        <td class="text-blue-600">Yes</td>
                        <td class="text-red-600">43</td>
                      </tr>
                      <tr>
                        <td>Alisson</td>
                        <td class="flex items-center justify-center">
                            <img class="avatar rounded-full w-6 h-6 inline mr-3"
                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                            alt=""> <span>Semijor</span>
                        </td>
                        <td class="text-orange-600">alisson@gmail.com</td>
                        <td class="text-blue-600">Yes</td>
                        <td class="text-red-600">43</td>
                      </tr>
                      <tr>
                        <td>Alisson</td>
                        <td class="flex items-center justify-center">
                            <img class="avatar rounded-full w-6 h-6 inline mr-3"
                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                            alt=""> <span>Semijor</span>
                        </td>
                        <td class="text-orange-600">alisson@gmail.com</td>
                        <td class="text-blue-600">Yes</td>
                        <td class="text-red-600">43</td>
                      </tr>
                      <tr>
                        <td>Alisson</td>
                        <td class="flex items-center justify-center">
                            <img class="avatar rounded-full w-6 h-6 inline mr-3"
                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                            alt=""> <span>Semijor</span>
                        </td>
                        <td class="text-orange-600">alisson@gmail.com</td>
                        <td class="text-blue-600">Yes</td>
                        <td class="text-red-600">43</td>
                      </tr>
                      <tr>
                        <td>Alisson</td>
                        <td class="flex items-center justify-center">
                            <img class="avatar rounded-full w-6 h-6 inline mr-3"
                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                            alt=""> <span>Semijor</span>
                        </td>
                        <td class="text-orange-600">alisson@gmail.com</td>
                        <td class="text-blue-600">Yes</td>
                        <td class="text-red-600">43</td>
                      </tr>
                      <tr>
                        <td>Alisson</td>
                        <td class="flex items-center justify-center">
                            <img class="avatar rounded-full w-6 h-6 inline mr-3"
                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                            alt=""> <span>Semijor</span>
                        </td>
                        <td class="text-orange-600">alisson@gmail.com</td>
                        <td class="text-blue-600">Yes</td>
                        <td class="text-red-600">43</td>
                      </tr>                    
                  </tbody>
                </table>
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
      memberTab: 'member'
    };
  },
  methods: {
    toggleMemberTab(type){
      this.memberTab = type;
    }
  }
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
.tab .active,
.memberTab.active
{
  border-bottom: 1px solid #da04f2;
  color: black;
  font-weight: 800;
}






table.hallOfFame_table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

table.hallOfFame_table th {
  background-color: #f2f2f2;
}

.hallOfFame_table th, td {
  text-align: center;
  padding: 16px;
}

.hallOfFame_table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.hallOfFame_table tr td:nth-child(3),
.hallOfFame_table tr th:nth-child(3) 
{
    text-align: center;
}
</style>
