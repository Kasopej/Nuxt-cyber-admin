<template>
  <div class="grid grid-cols-5">
    <div class="fixed bg-gray-50 h-screen dashboard_side">
      <div class="p-3 py-5">
        <input
          type="search"
          placeholder="Search By ID or Title"
          class="form-control mb-2"
        />
        <!-- <input type="date" class="form-control mb-2" /> -->
        <select>
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="under Review">Under Review</option>
          <option value="Accepted">Accepted</option>
        </select>
      </div>
      <div class="h-full w-full overflow-y-scroll">
        <dashboarditem
          :key="index"
          :current="i"
          v-for="(i, index) in sidebaritem"
        ></dashboarditem>
      </div>
    </div>
    <div class="col-start-2 col-span-4 dashboard_content">
      <div class="menu-container z-50 shadow-md">
        <mainmenu></mainmenu>
      </div>

      <div class="p-5">
        <div class="flex justify-between my-6">
          <div>
            <span class="mr-3 font_14">#YHW-PGM2453-8</span>

            <div class="dropdown relative inline-block">
              <button
                @click="popup_one = !popup_one"
                class="border border-gray-100 font-bold bg-gray-50 color_pink rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
              >
                NEED MORE INFO
              </button>

              <div
                v-if="popup_one"
                class="dropdown-menu origin-top-right absolute mt-2 w-56 rounded-md shadow-lg
                                bg-white ring-1 ring-black ring-opacity-5 right-6"
              >
                <popupone v-on:closeup="closeup" />
              </div>
            </div>
          </div>
          <div class="flex">
            <!-- <a href="#" class="font_12 mr-4 color_gray">MEMBERS MANAGEMENT</a> -->
            <div class="dropdown relative inline-block">
              <a
                href="#"
                @click="members_menu = !members_menu"
                class="font_14 mr-4 color_gray"
                >MEMBERS MANAGEMENT</a
              >
              <div
                v-if="members_menu"
                class="dropdown-menu origin-top-right absolute mt-2 w-36 rounded-md shadow-lg
                            bg-white ring-1 ring-black ring-opacity-5 right-5 z-10"
              >
                <div
                  class="p-4"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >Undefined</a
                  >
                  <a
                    href="#"
                    role="menuitem"
                    class="block list_item font_12 pb-4 color_pink"
                    >P 1</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >P 2</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >P 3</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >P 4</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >P 5</a
                  >
                </div>
              </div>
            </div>
            <div class="dropdown relative inline-block">
              <a
                href="#"
                @click="priorities_menu = !priorities_menu"
                class="font_14 mr-4 color_gray"
                >PRIORITIES
                <i class="fas fa-angle-down ml-1"></i>
              </a>
              <div
                v-if="priorities_menu"
                class="dropdown-menu origin-top-right absolute mt-2 w-36 rounded-md shadow-lg
                            bg-white ring-1 ring-black ring-opacity-5 right-5 z-10"
              >
                <div
                  class="p-4"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >Undefined</a
                  >
                  <a
                    href="#"
                    role="menuitem"
                    class="block list_item font_12 pb-4 color_pink"
                    >P 1</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >P 2</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >P 3</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >P 4</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >P 5</a
                  >
                </div>
              </div>
            </div>
            <div class="dropdown relative inline-block">
              <a
                href="#"
                @click="export_menu = !export_menu"
                class="font_14 mr-4 color_gray"
                >EXPORT
                <i class="fas fa-angle-down ml-1"></i>
              </a>
              <div
                v-if="export_menu"
                class="dropdown-menu origin-top-right absolute mt-2 w-36 rounded-md shadow-lg
                            bg-white ring-1 ring-black ring-opacity-5 right-5 z-10"
              >
                <div
                  class="p-4"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >CSV</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >XLS</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >JSON</a
                  >
                  <a
                    href="#"
                    class="block list_item font_12 text-gray-700 font-bold"
                    role="menuitem"
                    >PDF</a
                  >
                </div>
              </div>
            </div>

            <!-- <a href="#" class="font_12 mr-4 color_gray">
                            <i class="fas fa-angle-down ml-1"></i>
                        </a> -->
          </div>
        </div>
        <h3 class="font-bold font_18 mb-3">
          Insecure Direct Object Reference on https://api.example.net allows
          informations leakage.
        </h3>

        <div class="flex mb-12 items-center">
          <span class="grey_dot bg_gray rounded-sm"></span>
          <h4 class="font_14 ml-3 mr-4">
            FIDELITY BANK DEMO BUG BOUNTY PROGRAM
          </h4>
          <div class="fas fa-comments mr-2"></div>
          <span class="font_12 color_pink mr-1">8</span>
          <span class="font_12">Comments</span>
        </div>

        <div class="border-b-2 border-t-2 p-4">
          <div class="grid grid-cols-4 gap-5">
            <div class="col-span-3">
              <h3 class="color_gray font_16 tracking-wider pt-4 pb-10">
                SUMITTED BY
                <span class="font_16 color_black">YESWEBOT ON 2020-12-11</span>
              </h3>
              <div class="bg-white p-10 shadow-md rounded-md">
                <div class="flex justify-between mb-5">
                  <h3 class="font_16 font-bold">REPORT DETAILS</h3>
                  <i class="fas fa-angle-down"></i>
                </div>

                <div class="report_details">
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">BUG TYPE</div>
                    <div class="report_value">
                      Insecure Direct Object Reference (IDOR) (CWE-639) →
                      Remediation
                    </div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">SCOPE</div>
                    <div class="report_value">https://api.example.net</div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">END POINT</div>
                    <div class="report_value">
                      https://api.example.net/profile.php
                    </div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">SECURITY</div>
                    <div class="report_value">Medium</div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">VULNERABLE PART</div>
                    <div class="report_value">get-parameter</div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">PART NAME</div>
                    <div class="report_value">user_id</div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">PAYLOAD</div>
                    <div class="report_value">1337</div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">TECHNICAL ENVIRONMENT</div>
                    <div class="report_value">OSX, 10.14.6; Firefox 688.0</div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">APPLICATION FINGERPRINT</div>
                    <div class="report_value">Symfony, PHP</div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">IP USED</div>
                    <div class="report_value">13.37.13.37</div>
                  </div>
                  <div class="flex font_14 mb-3">
                    <div class="report_detail">SECURITY REQUIREMENT</div>
                    <div class="report_value">high</div>
                  </div>
                  <div class="flex font_14 mb-8">
                    <div class="report_detail">
                      <div class="flex">
                        <span>REWARD GRID</span>
                        <img
                          class="ml-2"
                          src="../assets/img/question-mark.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-4 gap-8 report_value">
                      <div class="flex flex-col col-span-1">
                        <span
                          class="font_10 color_gray font-bold text-center mb-1"
                          >LOW</span
                        >
                        <button
                          class="border rounded-full  border-pink-600 font-bold bg-gray-50 color_pink rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                          $50
                        </button>
                      </div>
                      <div class="flex flex-col col-span-1">
                        <span
                          class="font_10 color_gray font-bold text-center mb-1"
                          >MEDIUM</span
                        >
                        <button
                          class="border rounded-full  border-pink-600 font-bold bg-gray-50 color_pink rounded-md px-4 py-2  transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                          $505
                        </button>
                      </div>
                      <div class="flex flex-col col-span-1">
                        <span
                          class="font_10 color_gray font-bold text-center mb-1"
                          >HIGH</span
                        >
                        <button
                          class="border rounded-full  border-pink-600 font-bold bg-gray-50 color_pink rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                          $1,000
                        </button>
                      </div>
                      <div class="flex flex-col col-span-1">
                        <span
                          class="font_10 color_gray font-bold text-center mb-1"
                          >CRITICAL</span
                        >
                        <button
                          class="border rounded-full  border-pink-600 font-bold bg-gray-50 color_pink rounded-md px-4 py-2  transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                          $2,500
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex font_14 mb-8">
                    <div class="report_detail">
                      <div class="flex">
                        <span>PATCH STATUS</span>
                        <img
                          class="ml-2"
                          src="../assets/img/question-mark.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="report_value">
                      <span class="bg_gray3 color_gray rounded-md p-2 mr-3"
                        >UNDEFINED</span
                      >
                      <span>Ask for patch</span>
                    </div>
                  </div>

                  <div class="flex font_14 mb-8">
                    <div class="report_detail">TRACKING STATUS</div>
                    <div class="report_value">
                      <span class="bg_gray3 color_gray rounded-md p-2 mr-3"
                        >UNTRACK</span
                      >
                      <span>Update</span>
                    </div>
                  </div>

                  <div class="mb-6">
                    <button
                      class="border border-gray-100 font-bold bg-gray-50 color_pink rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                    >
                      EDIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1">
              <div class="mb-3 bg-white shadow-md">
                <div class="grid grid-cols-2">
                  <div
                    class="rating_box col-span-1 border-r border-white bg_green text-white p-5"
                  >
                    <div class="text-center">
                      <span class="font_10 tracking-wider">CVSS SCORE</span>
                      <h3 class="font_15 font-bold ">6.5</h3>
                    </div>
                  </div>
                  <div class="rating_box col-span-1 bg_green text-white p-5">
                    <div class="text-center">
                      <span class="font_10 tracking-wider">SEVERITY</span>
                      <h3 class="font_15 font-bold">MEDIUM</h3>
                    </div>
                  </div>
                </div>
                <div class="flex p-4 flex-col text-center border-b">
                  <span class="font_14 mb-3 font-bold">VECTOR STRING</span>
                  <!-- <span class="font_12 color_gray"
                    >CVSS 3.0/AN.AV/ACL/PL.L/UI:N/S:U/CH/I:N/A:N</span
                  > -->
                </div>
                <div class="flex py-3 px-2 justify-between border-b font-bold">
                  <p class="font_10 flex-1">UPDATE</p>
                  <div class="flex-1 flex items-center">
                    <span class="font_10">GIVE 1 BONUS POINT </span>
                    <img
                      class="ml-1 w-2 h-2"
                      src="../assets/img/question-mark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="border-b">
                  <div class="py-3 flex justify-center items-center">
                    <p class="font_13">Quality Points</p>
                    <img
                      class="ml-1 w-2 h-2"
                      src="../assets/img/question-mark.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="flex justify-center py-4 number_select">
                  <p class="shadow-md font_13 cursor-pointer rounded-md">1</p>
                  <p class="shadow-md font_13 cursor-pointer rounded-md">2</p>
                  <p class="shadow-md font_13 cursor-pointer rounded-md">3</p>
                  <p class="shadow-md font_13 cursor-pointer rounded-md">4</p>
                  <p class="shadow-md font_13 cursor-pointer rounded-md">5</p>
                </div>
              </div>
              <div class="bg-white shadow-md">
                <div class="font-bold p-4 border-b font_14">Reward</div>
                <div class="font-bold p-4 font_14 text-center">
                  ADD REWARD LOCATION TAG
                </div>
              </div>
            </div>
          </div>

          <button
            class="color_pink border-none bg-transparent mt-5 mb-2 flex items-center"
          >
            <img src="../assets/img/plus_icon.svg" class="mr-2 inline" alt="" />
            <span>ADD TAGS</span>
          </button>
        </div>

        <div class="p-8 border-b-2">
          <div class="toggle">
            <a
              href="#"
              class="toggle-item"
              :class="{ active: toggle }"
              @click.prevent="toggle = true"
              >BUG DESCRIPTION</a
            >
            <a
              href="#"
              class="toggle-item"
              :class="{ active: !toggle }"
              @click.prevent="toggle = false"
              >COMMENTS</a
            >
          </div>
          <!-- <div class="flex mb-9">
            <a href="#" class="font_13 mr-4 unline_pink font-bold"
              >BUG DESCRIPTION</a
            >
            <a href="#" class="font_13 color_gray">COMMENTS</a>
          </div> -->

          <div v-if="toggle">
            <div class="my-7">
              <p class="font_13 my-4">
                Insecure Direct Object Reference (called IDOR from here) occurs
                when a application exposes a reference to an internal
                implementation object.
              </p>
              <p class="font_13 mb-4">
                IDOR do not bring a direct security issue because, by itself, it
                reveals only the format/pattern used for the object identifier.
                IDOR bring, depending on the ...format/pattern in place, a
                capacity for the attacker to mount a enumeration attack in order
                to try to probe access to the associated objects.
              </p>
              <p class="font_13 mb-4">
                Enumeration attack can be described in the way in which the
                attacker build a collection of valid identifiers using the
                disovered format/pattern and test them ...against the
                application
              </p>
            </div>

            <div class="mb-7">
              <h1 class="color_pink font-bold font_20 mb-8">Exploitation</h1>

              <p class="font_13 mb-4">
                Edit your profile on your user’s page.
              </p>
              <p class="font_13 mb-4">
                Using a proxy like Burpsuite, you can see a request sent to :
                <b>https://api.example.net/profile.php?user_id=[ID].</b>
              </p>
              <p class="font_13 mb-4">
                Modifying this ID allows arbitrary access to personal
                informations on all users
              </p>
            </div>

            <div class="mb-7">
              <h1 class="color_pink font-bold font_20 mb-8">PoC</h1>
              <p class="font_13 mb-4">
                Go to the URL Above.
              </p>

              <div>
                <input
                  type="text"
                  class="form-control mb-4"
                  disabled
                  value="http://api.example.net/profile.php?user_id=1337"
                />
              </div>
              <p class="font_13 mb-4">
                In result, you can see the response of this request and you can
                have access to informations of the user with user_id 1337.
              </p>
            </div>

            <div class="mb-7">
              <h1 class="color_pink font-bold font_20 mb-8">Remediation</h1>
              <p class="font_13 mb-4">
                Apply an ACL on this endpoint to be sure the user_id match
                connected user
              </p>
            </div>
          </div>
          <div class="" v-else>
            <div class="flex mb-8 items-center">
              <input type="checkbox" class="mr-2" />
              <span class="font_12">Show only private comments</span>
            </div>

            <div
              class="mb-8 py-4 px-10 bg_black text-white rounded-sm shadow-lg"
            >
              <p>POST A RESPONSE</p>
            </div>

            <div class="mb-5">
              <p class="font_12">Action <span class="color_pink">*</span></p>
              <div class="flex items-center">
                <div
                  class="bg-white flex-1 mr-5 rounded-md flex items-center justify-between py-4"
                >
                  <select class="bg-gray-50">
                    <option value="">Post Comment</option>
                    <option value="">New Commnet</option>
                  </select>
                  <input type="checkbox" class="mx-3" />
                  <span class="font_13">Make it private</span>
                </div>
                <div class="flex-2"></div>
              </div>
            </div>

            <!-- <div class="bg-white shadow-md rounded-sm mb-7">
                        <div class="flex justify-between py-4 px-7 border-b-2">
                            <div class="flex">
                                
                                <div class="flex items-center">
                                    <span class="font_12 font-bold bg_lightblue mr-3 py-2 px-7 rounded-md color_blue flex items-center">Write</span>
                                    <span class="font_12 font-bold bg-transparent mr-20">Preview</span>
                                    <div class="bg-white rounded-md flex items-center justify-between p-4 shadow-md cursor-pointer">
                                        <span class="font_14 mr-32">Select a template</span>
                                        <i class="fas fa-caret-down cursor-pointer"></i>
                                    </div>
                                    <img src="../assets/img/question-mark.svg" class="w-2 h-2 ml-3" alt="">
                                </div>
                            </div>
                            <div class="flex items-center font_14">
                                <p>Styling with <span class="font_12 color_pink">MarkDown is supported</span></p>
                            </div>
                        </div>
                        <div class="h-52 p-3">
                            <textarea class="form-control w-full h-full"></textarea>
                        </div>
                    </div> -->

            <customtextfield :item="fields">
              <div slot="tab" class="flex">
                <button
                  type="button"
                  class="border border-gray-200 font-bold bg-gray-200 color_blue rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                >
                  Write
                </button>
                <button
                  type="button"
                  class="border border-gray-200 font-bold rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                >
                  Preview
                </button>
              </div>
              <div slot="select" class="flex items-center w-full">
                <div class="flex-5">
                  <select class="bg-gray-50" v-model="fields">
                    <option value="">Select </option>
                    <option>Accepted > Resolved</option>
                    <option>Underreview > Duplicate</option>
                    <option>Underreview > Thanks</option>
                    <option>Asked for fix verify > Resolved</option>
                    <option>Accepted > Asked for fix verify</option>
                    <option>Under Review > Accepted</option>
                    <option>New > Under review</option>
                  </select>
                </div>

                <i class="fas fa-question-circle mx-2"></i>
              </div>
            </customtextfield>

            <div>
              <p class="font_12 mt-4">
                Program Banner (JPEG or PNG, 3MB max, 3840x2160px max)
              </p>
              <div class="flex mt-3">
                <input class="w-full hidden" ref="uploadimage" type="file" />
                <input
                  type="text"
                  class="form-control rounded-l-md"
                  disabled
                  placeholder="Choose"
                />
                <button
                  type="button"
                  @click.prevent="$refs.uploadimage.click()"
                  class="border border-gray-200 font-bold bg-gray-300  rounded-r-md px-6 py-2  transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                >
                  Browse
                </button>
              </div>
            </div>
            <p class="font_10">
              <span class="color_pink">*</span> Mandatory fields
            </p>
            <div class="my-6">
              <button
                class="bg_pink font_13 px-4 py-3 rounded-md shadow-sm text-white ml-auto block"
              >
                Post a response
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal class="modal" id="modalone">
      <div slot="header">
        <div class="flex justify-end">
          <i
            class="fas fa-times cursor-pointer"
            @click.prevent="$m.hidemodal('modalone')"
          ></i>
        </div>
      </div>
      <div slot="content">
        <modalone></modalone>
      </div>
    </modal>
  </div>
  <!-- <div class="w-full flex" id="dashboard">
    <aside class="dashboard_side sticky top-0">
     
    </aside>
    <section class="border dashboard_content bg_gray3">
    
    </section>

   
  </div> -->
</template>

<script>
import customtextfield from "../components/extra/customtextfield";
import modalone from "../components/dashboard/modal1";
import popupone from "../components/dashboard/popup1";
import dashboarditem from "../components/extra/dashboarditem";
import mainmenu from "../components/extra/mainmenu";

export default {
  name: "dashboard",
  components: {
    customtextfield,
    modalone,
    popupone,
    dashboarditem,
    mainmenu,
  },
  data() {
    return {
      popup_one: false,
      top_sidemenu: "",
      priorities_menu: false,
      members_menu: false,
      export_menu: false,
      latest_activities: false,
      sidebaritem: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
      ],
      toggle: true,
      fields: "",
    };
  },
  methods: {
    closeup() {
      this.popup_one = false;
    },
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
.dashboard_side {
  /* border: 1px dashed; */
  flex: 1;
}

.dashboard_content {
  flex: 4;
  /* border: 1px dashed; */
}

.font_13 {
  font-size: 13px;
}

.tag_icon {
  background: #e5e5e5;
  padding: 3px;
  border-radius: 50%;
}

.bank_icon_box {
  width: 50%;
}

.bank_icon_box > :nth-child(1) {
  flex: 1;
}

.bank_icon_box > :nth-child(2) {
  flex: 4;
}

.grey_dot {
  width: 10px;
  height: 10px;
}

input:active,
input:focus,
select:focus,
select:active,
textarea:focus,
button:focus,
button:active {
  outline: none;
}

.inner-nav {
  width: 100%;
  /* border: 1px dashed; */
}

.report_detail {
  flex: 1;
}

.report_value {
  flex: 2;
}

.reward_price {
  border: 2px solid #da04f2;
  padding: 5px 10px;
  border-radius: 20px;
}

.rating_box {
  position: relative;
}

.rating_box_inner {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-41%, -50%);
}
.unline_pink {
  border-bottom: 1px solid #da04f2;
}

.list_item:not(:last-child) {
  padding-bottom: 10px;
}

.flex_1 {
  flex: 1;
}

.flex_2 {
  flex: 2;
}

.flex_3 {
  flex: 3;
}

.flex_4 {
  flex: 4;
}

.dashboard_side{
  width: 20vw;
}   

.number_select p {
  padding: 3px 8px;
  margin: 0 8px;
}

@media screen and (max-width: 81.25em){ /* 1300px/16 */
  .dashboard_side{
    display: none;
  }

  .dashboard_content {
    grid-column-start: 1;
    grid-column: span 5/span 5;
  }

  .mobilemenu{
    display: block;
    margin-left: 1rem;
  }

}
</style>
