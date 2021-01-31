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
        <mainmenu v-on:togglemenu="togglemenu"></mainmenu>
      </div>
<div class="flex justify-between tabsticky px-10 items-center z-20">
  <div>
      <div class="toggle ">
            <a
              href="#"
              class="toggle-item"
              :class="{ active: currentTab == 'summary' }"
              @click.prevent="toggleTab('summary')"
              >REPORT SUMMARY
            </a>
            <a
              href="#"
              class="toggle-item"
              :class="{ active: currentTab == 'description' }"
              @click.prevent="toggleTab('description')"
              >BUG DESCRIPTION</a
            >
            <a
              href="#"
              class="toggle-item"
              :class="{ active: currentTab == 'comments' }"
              @click.prevent="toggleTab('comments')"
              >COMMENTS</a
            >
          </div>
  </div>
  <div>
       <div class="flex">
                <!-- <a href="#" class="font_12 mr-4 color_gray">MEMBERS MANAGEMENT</a> -->
                <div class="dropdown relative inline-block">
                  <a
                    href="#"
                    @click="members_menu = !members_menu"
                    class="font_14 mr-4 color_gray summary__menulink"
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
                    class="font_14 mr-4 color_gray summary__menulink"
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
                    class="font_14 mr-4 color_gray summary__menulink"
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
</div>
      <div class="px-5 ">
        <div class="px-1 md:px-8 lg:px-8 xl:px-8">
        
         

          <div v-if="currentTab == 'description'">
            <div class="mb-7">
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
          <div class="" v-if="currentTab == 'comments'">
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
                <div style="width: 100%;" class="bg-white mr-5 rounded-md
                    flex items-center justify-between py-4 post__comment">
                  <div class="flex_1">
                    <select class="bg-gray-50">
                      <option value="">Post Comment</option>
                      <option value="">Need More Information</option>
                      <option value="">Accepted </option>
                      <option value="">Resolved </option>
                      <option value="">Under review </option>
                      <option value="">Duplicate </option>
                      <option value="">Thanks </option>
                      <option value="">Asked for fix verify </option>
                      <option value="">New </option>

                      <!-- <option value="">New Commnet</option> -->
                    </select>
                  </div>
                  <div class="flex_1 post__comment">
                    <input type="checkbox" class="mx-3" />
                    <span class="font_13">Make it private</span>
                  </div>
                  
                </div>
                <!-- <div class="flex-2"></div> -->
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
          <div v-if="currentTab == 'summary'">
            <div class="flex justify-between summary__headerbox">
              <div>
               

                <div class="dropdown relative inline-block">
                

                  <div
                    v-if="popup_one"
                    class="dropdown-menu origin-top-right absolute  w-56 rounded-md shadow-lg
                                bg-white ring-1 ring-black ring-opacity-5 right-6"
                  >
                    <popupone v-on:closeup="closeup" />
                  </div>
                </div>
              </div>
           
            </div>
          


            <div class="px-4">
              <div class="grid grid-cols-4 gap-5 summary__grid">
                <div class="col-span-3 summary__gridleft">
                  <h3 class="color_gray font_16 tracking-wider pt-4 pb-10">
                    SUMITTED BY
                    <span class="font_16 color_black"
                      >Afolabi ON 2020-12-11</span
                    >
                  </h3>
                  
            <div class="flex mb-2 items-center">
           
              
              <div class="fas fa-comments mr-2"></div>
              <span class="font_12 color_pink mr-1">8</span>
              <span class="font_12">Comments</span>
            </div>
                  <div class="bg-white px-10 py-2 
                   rounded-md">
                    <div class="flex justify-between mb-5">
                      <h3 class="font_16 font-bold">REPORT DETAILS</h3>
                      <i class="fas fa-angle-down"></i>
                    </div>

                    <div class="report_details">
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">ACTION STATE</div>
                        <div class="report_value">
                     New (Open)
                        </div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">REPORTED TO</div>
                        <div class="report_value">Company-Name</div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">REPORTED AT</div>
                        <div class="report_value">
                          December 22, 2020 7:12am +0100
                        </div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">SCOPE	</div>
                        <div class="report_value">api.example.com</div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">REFERENCES </div>
                        <div class="report_value">TEK-PRG1234567890</div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">CVE ID</div>
                        <div class="report_value">12345</div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">ASSIGNED TO</div>
                        <div class="report_value">Company-Representative</div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">BUG TYPE</div>
                        <div class="report_value">
                         Allocation of Resources Without Limits or Throttling
                        </div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">SEVERITY</div>
                        <div class="report_value">Medium</div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">PARTICIPANTS</div>
                        <div class="report_value">Name-of-participating-Hackers (Add participant)</div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">NOTIFICATIONS</div>
                        <div class="report_value">Enabled</div>
                      </div>
                      <div class="flex font_14 mb-3 report__options">
                        <div class="report_detail">VISIBILITY</div>
                        <div class="report_value">Private</div>
                      </div>
                      <div class="flex font_14 mb-8 report__options">
                        <div class="report_detail report__label">
                          <div class="flex">
                            <span>REWARD GRID</span>
                            <img
                              class="ml-2"
                              src="../assets/img/question-mark.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-4 gap-8 report_value reward__grid">
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

                      <!-- <div class="flex font_14 mb-8 report__options">
                        <div class="report_detail">
                          <div class="flex report__label">
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

                      <div class="flex font_14 mb-8 report__options">
                        <div class="report_detail report__label">TRACKING STATUS</div>
                        <div class="report_value">
                          <span class="bg_gray3 color_gray rounded-md p-2 mr-3"
                            >UNTRACK</span
                          >
                          <span>Update</span>
                        </div>
                      </div> -->

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
                <div class="col-span-1 summary__gridright">
                  <div class="mb-1 bg-white ">
                    <div class="grid grid-cols-2">
                      <div
                        class="rating_box col-span-1 border-r border-white bg_green text-white p-5"
                      >
                        <div class="text-center">
                          <span class="font_10 tracking-wider">CVSS SCORE</span>
                          <h3 class="font_15 font-bold ">6.5</h3>
                        </div>
                      </div>
                      <div
                        class="rating_box col-span-1 bg_green text-white p-5"
                      >
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
                    <div
                      class="flex py-3 px-2 justify-between border-b font-bold"
                    >
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
                      <p class="shadow-md font_13 cursor-pointer rounded-md">
                        1
                      </p>
                      <p class="shadow-md font_13 cursor-pointer rounded-md">
                        2
                      </p>
                      <p class="shadow-md font_13 cursor-pointer rounded-md">
                        3
                      </p>
                      <p class="shadow-md font_13 cursor-pointer rounded-md">
                        4
                      </p>
                      <p class="shadow-md font_13 cursor-pointer rounded-md">
                        5
                      </p>
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
                <img
                  src="../assets/img/plus_icon.svg"
                  class="mr-2 inline"
                  alt=""
                />
                <span>ADD TAGS</span>
              </button>
            </div>
          </div>
        </div>

        <div v-if="showMoblieMenu" class="mobile__content shadow-lg bg-gray-50">
          <!-- <span class="close" @click="showMoblieMenu = false">&times;</span> -->
          <div class="bg-gray-50 h-screen mobile_dashboard_side">
            <div class="p-3 py-5">
              <input type="search" placeholder="Search By ID or Title" class="form-control mb-2"/>
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

    <!-- <div id="mobileOverlay" v-if="showMoblieMenu" class="mobile__modal">

      <div class="mobile__content">
        <span class="close" @click="showMoblieMenu = false">&times;</span>
        <p>Some text in the Modal..</p>
      </div>

    </div> -->
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
      currentTab: "summary",
      fields: "",
      showMoblieMenu: false
    };
  },
  methods: {
    closeup() {
      this.popup_one = false;
    },
    toggleTab(type) {
      this.currentTab = type;
    },
    togglemenu(){
      this.showMoblieMenu = !this.showMoblieMenu;
    },
  }
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

.dashboard_side {
  width: 20vw;
}

.number_select p {
  padding: 3px 8px;
  margin: 0 8px;
}

@media screen and (max-width: 81.25em) {
  /* 1300px/16 */
  .dashboard_side {
    display: none;
  }

  .dashboard_content {
    grid-column-start: 1;
    grid-column: span 5 / span 5;
  }

  .mobilemenu {
    display: block;
    margin-left: 1rem;
  }
}

@media screen and (max-width: 64.37em) { /**1030px/16 */
  .summary__grid{
    grid-auto-columns: auto;
  }

  .summary__gridleft {
    grid-column: span 4 / span 4;
  }

  .summary__gridright{
    grid-column: span 4 / span 4;
    font-size: 14px !important;
  }
}

@media screen and (max-width: 48.75em) { /** 780px /16 */
  .summary__headerbox{
    flex-direction: column;
  }

  .summary__headerbox :nth-child(2){
    justify-content: space-between;
  }

  .mobile__content{
    width: 50%;
  }
}



@media screen and (max-width: 42.5em) { /** 680px /16 */
  .toggle .toggle-item,
  .summary__menulink {
    font-size: 10px;
  }
  .report__options {
    flex-direction: column;
  } 

  .report__label {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 32.5em) { /** 520px /16 */
  .reward__grid {
    grid-auto-columns: auto;
    grid-auto-rows: auto;
  }

  .reward__grid > * {
    grid-column: span 4 / span 4;
  }

  .post__comment{
    flex-direction: column;
  }

  .mobile__content{
    width: 64%;
  }
}

@media screen and (max-width: 23.75em) { /** 380px /16 */
  .mobile__content{
    width: 100%;
  }
}




/* Modal Content */
.mobile__content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fefefe;
  margin: auto;
  /* padding: 10px 12px 0 0; */
  /* border: 1px solid #888; */
  width: 33%;
  height: 100%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.tabsticky{
  position:sticky;
  top:6rem;
  background:#fff
}
</style>
