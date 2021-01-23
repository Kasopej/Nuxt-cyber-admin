<template>
    <div class='w-full flex' id="dashboard">
        <aside class="dashboard_side">
            <div class="p-3 pt-10">
                <div class="flex border px-4 py-3 mb-3 rounded-md items-center">
                    <img class='mr-3 tag_icon bg_gray2' src="../assets/img/tag_icon.svg" alt="">
                    <span class='mr-3 font-bold'>Fidelity Bank</span>
                    <i class="fas fa-angle-down"></i>
                </div>
                <div class="flex mb-3">
                    <div class="dropdown relative inline-block">
                        <span @click="latest_activities = !latest_activities" class="cursor-pointer bg-gray-100 rounded-md font_10 p-2 justify-between flex-1 mr-2 flex justify-between items-center">
                            Sort by Latest Activities <i v-if="latest_activities" class="fas fa-angle-down ml-2"></i><i v-if="!latest_activities" class="fas fa-angle-right ml-2"></i>
                        </span>
                        <div v-if="latest_activities" class="dropdown-menu origin-top-right absolute mt-2 w-36 rounded-md shadow-lg
                            bg-white ring-1 ring-black ring-opacity-5">
                            <div class="p-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" role="menuitem" class="block list_item font_12 pb-4 color_pink">Latest Actvities</a>
                                <a href="#" class="block list_item font_12 text-gray-700" role="menuitem">Oldest Activities</a>
                                <a href="#" class="block list_item font_12 text-gray-700" role="menuitem">Oldest Activities</a>
                                <a href="#" class="block list_item font_12 text-gray-700" role="menuitem">Latest Activities</a>
                                <a href="#" class="block list_item font_12 text-gray-700" role="menuitem">Highest Priority</a>
                                <a href="#" class="block list_item font_12 text-gray-700" role="menuitem">Lowest Priority</a>
                                <a href="#" class="block list_item font_12 text-gray-700" role="menuitem">Oldest Activities</a>
                            </div>
                        </div>
                    </div>
                    <span class="bg-gray-100 p-2 font_10 rounded-md flex-1 flex justify-between items-center">
                        Advance Filters <i class="fas fa-angle-right"></i>
                    </span>
                </div>
                <div class="flex mb-3 p-2">
                    <div class="pl-2 pr-3 border-r-2 color_pink">
                        <i class="fas fa-search color_pink"></i>
                    </div>
                    <input type="text" class="ml-2" placeholder="Search a Program">
                </div>
                <div class="flex mb-3 bank_icon_box">
                    <div class="flex justify-center items-center">
                        <img class="mr-3 tag_icon bg_gray2" src="../assets/img/tag_icon.svg" alt="">
                    </div>
                    <div class="bg-gray-100 p-2 rounded-md bg-gray-100 p-2 rounded-md">
                        <p class="font-bold font_12">FIDELITY BANK</p>
                        <span class="font_10">Fidelity Bank</span>
                    </div>
                </div>
                <div class="flex mb-3 p-2 items-center">
                    <input type="text" class="mr-10" placeholder="Search a Project">
                    <div><i class="fas fa-search color_gray"></i></div>
                </div>        

                <div class="flex mb-3 items-center">
                    <span class="grey_dot bg_gray rounded-sm"></span>
                    <h4 class="font_12 mx-3">FIDELITY BANK DEMO BUG BOUNTY PROGRAM</h4>
                    <i class="font_10 color_pink">7</i>
                </div>
                
            </div>
            <div class="px-6 py-3 border-b bg_lightpink">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_gray2 p-2 rounded-md color_blue">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2 items-center">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold font_14">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>

            
        </aside>
        <section class="border dashboard_content bg_gray3">
            <nav class="w-full mb-9">
                <div class='bg-white inner-nav ml-auto px-5 pt-10 pb-5 shadow-md'>
                    <ul class="flex list-none">
                        <li class="mr-20"><a class="font-bold color_darkpink" href="#" @click.prevent="$m.showmodal('modalone')"> All</a></li>
                        <li class="mr-20"><a class="font-bold mr-2 color_gray" href=""> New</a> <span class="color_pink">8</span></li>
                        <li class="mr-20"><a class="font-bold color_gray" href=""> Under Review</a></li>
                        <li class="mr-20"><a class="font-bold color_gray" href=""> Accepted</a></li>
                    </ul>
                </div>
            </nav>

            <div class="p-5">
                <div class="flex justify-between mb-14">
                    <div>
                        <span class='mr-3 font_12'>#YHW-PGM2453-8</span>
                        
                        <div class="dropdown relative inline-block">
                            <button @click="popup_one = !popup_one" class="color_pink bg-white rounded-md font_12 p-2 shadow-md">
                                NEED MORE INFO
                            </button>

                            <div v-if="popup_one" class="dropdown-menu origin-top-right absolute mt-2 w-56 rounded-md shadow-lg
                                bg-white ring-1 ring-black ring-opacity-5 right-6">                                
                                <popupone v-on:closeup="closeup"/>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <!-- <a href="#" class="font_12 mr-4 color_gray">MEMBERS MANAGEMENT</a> -->
                        <div class="dropdown relative inline-block">                        
                            <a href="#" @click="members_menu = !members_menu" class="font_12 mr-4 color_gray">MEMBERS MANAGEMENT</a>
                            <div v-if="members_menu" class="dropdown-menu origin-top-right absolute mt-2 w-36 rounded-md shadow-lg
                            bg-white ring-1 ring-black ring-opacity-5 right-5 z-10">
                                <div class="p-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                     <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">Undefined</a>            
                                    <a href="#" role="menuitem" class="block list_item font_12 pb-4 color_pink">P 1</a>
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">P 2</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">P 3</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">P 4</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">P 5</a>            
                                </div>
                            </div>
                        </div>
                        <div class="dropdown relative inline-block">                        
                            <a href="#" @click="priorities_menu = !priorities_menu" class="font_12 mr-4 color_gray">PRIORITIES
                                <i class="fas fa-angle-down ml-1"></i>
                            </a>
                            <div v-if="priorities_menu" class="dropdown-menu origin-top-right absolute mt-2 w-36 rounded-md shadow-lg
                            bg-white ring-1 ring-black ring-opacity-5 right-5 z-10">
                                <div class="p-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">Undefined</a>            
                                    <a href="#" role="menuitem" class="block list_item font_12 pb-4 color_pink">P 1</a>
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">P 2</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">P 3</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">P 4</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">P 5</a>            
                                </div>
                            </div>
                        </div>
                        <div class="dropdown relative inline-block">                        
                            <a href="#" @click="export_menu = !export_menu" class="font_12 mr-4 color_gray">EXPORT
                                <i class="fas fa-angle-down ml-1"></i>
                            </a>
                            <div v-if="export_menu" class="dropdown-menu origin-top-right absolute mt-2 w-36 rounded-md shadow-lg
                            bg-white ring-1 ring-black ring-opacity-5 right-5 z-10">
                                <div class="p-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">CSV</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">XLS</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">JSON</a>            
                                    <a href="#" class="block list_item font_12 text-gray-700 font-bold" role="menuitem">PDF</a>            
                                </div>
                            </div>
                        </div>
                        
                        <!-- <a href="#" class="font_12 mr-4 color_gray">
                            <i class="fas fa-angle-down ml-1"></i>
                        </a> -->
                    </div>
                </div>
                <h3 class="font-bold font_14 mb-3"><span class="color_pink">/</span> Insecure Direct Object Reference on https://api.example.net allows informations leakage.</h3>

                <div class="flex mb-12 items-center">
                    <span class="grey_dot bg_gray rounded-sm"></span>
                    <h4 class="font_12 ml-3 mr-4">FIDELITY BANK DEMO BUG BOUNTY PROGRAM</h4>                    
                    <img class="mr-2" src="../assets/img/chat_icon.svg" alt="">
                    <span class="font_10 color_pink mr-1">8</span>
                    <span class="font_10">Comments</span>                    
                </div>

                <div class="border-b-2 border-t-2 p-4">
                    <div class="grid grid-cols-3 gap-5">
                        <div class="col-span-2">
                            <h3 class="color_gray font_12 pt-4 pb-10">SUMITTED BY <span class="font_12 color_black">YESWEBOT ON 2020-12-11</span></h3>
                            <div class="bg-white p-4 shadow-md rounded-md pt-6">
                                <div class="flex justify-between mb-5">
                                    <h3 class="font_14">REPORT DETAILS</h3>
                                    <i class="fas fa-angle-down"></i>
                                </div>

                                <div class="report_details">
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">BUG TYPE</div>
                                        <div class="report_value">Insecure Direct Object Reference (IDOR) (CWE-639) → Remediation</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">SCOPE</div>
                                        <div class="report_value">https://api.example.net</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">END POINT</div>
                                        <div class="report_value">https://api.example.net/profile.php</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">SECURITY</div>
                                        <div class="report_value">Medium</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">VULNERABLE PART</div>
                                        <div class="report_value">get-parameter</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">PART NAME</div>
                                        <div class="report_value">user_id</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">PAYLOAD</div>
                                        <div class="report_value">1337</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">TECHNICAL ENVIRONMENT</div>
                                        <div class="report_value">OSX, 10.14.6; Firefox 688.0</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">APPLICATION FINGERPRINT</div>
                                        <div class="report_value">Symfony, PHP</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">IP USED</div>
                                        <div class="report_value">13.37.13.37</div>
                                    </div>
                                    <div class="flex font_12 mb-3">
                                        <div class="report_detail">SECURITY REQUIREMENT</div>
                                        <div class="report_value">high</div>
                                    </div>
                                    <div class="flex font_12 mb-8">
                                        <div class="report_detail">
                                            <div class="flex">
                                                <span>REWARD GRID</span> 
                                                <img class="ml-2" src="../assets/img/question-mark.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-4 gap-8 report_value">
                                            <div class="flex flex-col col-span-1">
                                                <span class="font_10 color_gray font-bold text-center mb-1">LOW</span>
                                                <span class="rounded-xl reward_price text-center">$50</span>
                                            </div>
                                            <div class="flex flex-col col-span-1">
                                                <span class="font_10 color_gray font-bold text-center mb-1">MEDIUM</span>
                                                <span class="rounded-xl reward_price text-center">$505</span>
                                            </div>
                                            <div class="flex flex-col col-span-1">
                                                <span class="font_10 color_gray font-bold text-center mb-1">HIGH</span>
                                                <span class="rounded-xl reward_price text-center">$1,000</span>
                                            </div>
                                            <div class="flex flex-col col-span-1">
                                                <span class="font_10 color_gray font-bold text-center mb-1">CRITICAL</span>
                                                <span class="rounded-xl reward_price text-center">$2,500</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div class="flex font_12 mb-8">
                                        <div class="report_detail">
                                            <div class="flex">
                                                <span>PATCH STATUS</span> 
                                                <img class="ml-2" src="../assets/img/question-mark.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="report_value">
                                            <span class="bg_gray3 color_gray rounded-md p-2 mr-3">UNDEFINED</span>
                                            <span>Ask for patch</span>
                                        </div>
                                    </div>

                                    <div class="flex font_12 mb-8">
                                        <div class="report_detail">TRACKING STATUS</div>
                                        <div class="report_value">
                                            <span class="bg_gray3 color_gray rounded-md p-2 mr-3">UNTRACK</span>
                                            <span>Update</span>
                                        </div>
                                    </div>
                                    
                                    <div class="mb-6">
                                        <button class="color_pink font_12 py-2 px-10 rounded-sm shadow-md">EDIT</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <div class="mb-3 bg-white shadow-md">
                                <div class="grid grid-cols-2">
                                    <div class="rating_box col-span-1 border-r border-white bg_green text-white p-4">
                                        <div class="rating_box_inner">
                                            <span class="font_10">CVSS SCORE</span>
                                            <h3 class="font_50 font-bold tracking-widest">6.5</h3>
                                        </div>
                                    </div>
                                    <div class="rating_box col-span-1 bg_green text-white p-4">
                                        <div class="rating_box_inner">
                                            <span class="font_10">SEVERITY</span>
                                            <h3 class="font_19 font-bold">MEDIUM</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex p-4 flex-col text-center border-b">
                                    <span class="font_10 mb-3 font-bold">VECTOR STRING</span>
                                    <span class="font_10 color_gray">CVSS 3.0/AN.AV/ACL/PL.L/UI:N/S:U/CH/I:N/A:N</span>
                                </div>
                                <div class="flex py-3 px-5 justify-between border-b font-bold">
                                    <p class="font_12 flex-1">UPDATE</p>
                                    <div class="flex-1 flex items-center">
                                        <span class="font_12">GIVE 1 BONUS POINT </span>
                                        <img class="ml-1 w-2 h-2" src="../assets/img/question-mark.svg" alt="">
                                    </div>
                                </div>
                                <div class="border-b">
                                    <div class="py-3 flex justify-center items-center">
                                        <p class="font_13">Quality Points</p>
                                        <img class="ml-1 w-2 h-2" src="../assets/img/question-mark.svg" alt="">
                                    </div>
                                </div>
                                <div class="flex justify-center py-4">
                                    <p class="mx-5 font_13">1</p>
                                    <p class="mx-5 font_13">2</p>
                                    <p class="mx-5 font_13">3</p>
                                    <p class="mx-5 font_13">4</p>
                                    <p class="mx-5 font_13">5</p>
                                </div>
                            </div>
                            <div class="bg-white shadow-md">
                                <div class="font-bold p-4 border-b font_14">Reward</div>
                                <div class="font-bold p-4 font_14 text-center">ADD REWARD LOCATION TAG</div>
                            </div>
                        </div>
                    </div>

                    <button class="color_pink border-none bg-transparent mt-5 mb-2 flex items-center">
                        <img src="../assets/img/plus_icon.svg" class="mr-2 inline" alt=""> 
                        <span>ADD TAGS</span>    
                    </button>
                </div>

                <div class="p-8 border-b-2">
                    <div class="flex mb-9">
                        <a href="#" class="font_13 mr-4 unline_pink font-bold">BUG DESCRIPTION</a>
                        <a href="#" class="font_13 color_gray">COMMENTS</a>
                    </div>

                    <div>
                        <div class="mb-7">
                            <h1 class="color_pink mb-8">Description</h1>

                            <p class="font_12 mb-4"><span class="color_pink">/</span> Insecure Direct Object Reference (called IDOR from here) occurs when a application exposes a reference to an internal implementation object.</p>
                            <p class="font_12 mb-4"><span class="color_pink">/</span> IDOR do not bring a direct security issue because, by itself, it reveals only the format/pattern used for the object identifier. IDOR bring, depending on the ...format/pattern in place, a capacity for the attacker to mount a enumeration attack in order to try to probe access to the associated objects.</p>
                            <p class="font_12 mb-4"><span class="color_pink">/</span> Enumeration attack can be described in the way in which the attacker build a collection of valid identifiers using the disovered format/pattern and test them ...against the application</p>
                        </div>

                        <div class="mb-7">
                            <h1 class="color_pink mb-8">Exploitation</h1>

                            <p class="font_12 mb-4"><span class="color_pink">/</span> Edit your profile on your user’s page.</p>
                            <p class="font_12 mb-4"><span class="color_pink">/</span> Using a proxy like Burpsuite, you can see a request sent to : <b>https://api.example.net/profile.php?user_id=[ID].</b></p>
                            <p class="font_12 mb-4"><span class="color_pink">/</span> Modifying this ID allows arbitrary access to personal informations on all users</p>
                        </div>

                        <div class="mb-7">
                            <h1 class="color_pink mb-8">PoC</h1>
                            <p class="font_12 mb-4"><span class="color_pink">/</span> Go to the URL Above.</p>

                            <div class="shadow bg-white py-9 pl-9 rounded-md mb-7">
                                http://api.example.net/profile.php?user_id=1337
                            </div>
                            <p class="font_12 mb-4"><span class="color_pink">/</span> In result, you can see the response of this request and you can have access to informations of the user with user_id 1337.</p>
                        </div>

                        <div class="mb-7">
                            <h1 class="color_pink mb-8">Remediation</h1>
                            <p class="font_12 mb-4"><span class="color_pink">/</span> Apply an ACL on this endpoint to be sure the user_id match connected user</p>
                        </div>

                    </div>


                </div>

                <div class="p-8">
                    <div class="flex mb-6">
                        <a href="#" class="font_13 mr-4 unline_pink font-bold">COMMENTS</a>
                        <a href="#" class="font_13 color_gray">BUG DESCRIPTION</a>
                    </div>

                    <div class="flex mb-8 items-center">
                        <input type="checkbox" class="mr-2">
                        <span class="font_12">Show only private comments</span>
                    </div>

                    <div class="mb-8 py-4 px-10 bg_black text-white rounded-sm shadow-lg">
                        <p>POST A RESPONSE</p>
                    </div>

                    <div class="mb-5">
                        <p class="font_10">Action <span class="color_pink">*</span></p>
                        <div class="flex items-center">
                            <div class="bg-white mr-5 rounded-md flex items-center justify-between p-4">
                                <span class="font_14 mr-32">Post Comment</span>
                                <i class="fas fa-caret-down cursor-pointer"></i>
                            </div>
                            <input type="checkbox" class="mr-3">
                            <span class="font_13">Make it private</span>
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

                    <customtextfield>
                        <div slot="tab" class="flex">
                            <span class="font_12 font-bold bg_lightblue mr-3 py-2 px-7 rounded-md color_blue flex items-center">Write</span>
                            <span class="font_12 font-bold bg-transparent pl-3 py-2 mr-20">Preview</span>
                        </div>
                        <div slot="select" class="flex items-center">
                            <div class="bg-white rounded-md flex items-center justify-between p-4 shadow-md cursor-pointer">
                                <span class="font_14 mr-32">Select a template</span>
                                <i class="fas fa-caret-down cursor-pointer"></i>
                            </div>
                            <img src="../assets/img/question-mark.svg" class="w-2 h-2 ml-3" alt="">
                        </div>
                    </customtextfield>

                    <p class="color_gray font_14 mb-2">Attachments (TXT or JPEG or PNG, 2MB max)</p>
                    <div class="bg-white flex shadow-md mb-6 rounded-md">
                        <p class="font_14 flex_4 py-5 px-7">Choose</p>
                        <button class="flex_1 font_14 bg_gray2">Browse</button>
                    </div>
                    <p class="font_10"><span class="color_pink">*</span> Mandatory fields</p>
                    <div class="my-6">
                        <button class="bg_pink font_13 px-4 py-3 rounded-md shadow-sm text-white ml-auto block">Post a response</button>
                    </div>
                </div>
            </div>
        </section>


        <modal class="modal" id="modalone">
            <div slot="header">
                <div class="flex justify-end">
                    <i class="fas fa-times cursor-pointer" @click.prevent="$m.hidemodal('modalone')"></i>
                </div>
            </div>
            <div slot="content">
                <modalone></modalone>
            </div>
            
        </modal>
    </div>
</template>

<script>
import customtextfield from '../components/extra/customtextfield';
import modalone from '../components/dashboard/modal1';
import popupone from '../components/dashboard/popup1';

export default {
    name: 'dashboard',
    components: {
        customtextfield,
        modalone,
        popupone
    },
    data(){
        return {
            popup_one: false,
            top_sidemenu: '',
            priorities_menu: false,
            members_menu: false,
            export_menu: false,
            latest_activities: false
        }
    },
    methods: {
        closeup(){
            this.popup_one = false
        }
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

.dashboard_content{
    flex: 3;
    /* border: 1px dashed; */
}

.font_13 {
    font-size: 13px;
}

.tag_icon {
    background: #E5E5E5;
    padding: 3px;
    border-radius: 50%;
}

.bank_icon_box{
    width: 50%;
}

.bank_icon_box > :nth-child(1) {
    flex: 1;
}

.bank_icon_box > :nth-child(2) {
    flex: 4;
}

.grey_dot{
    width: 10px;
    height: 10px;
}

input:active,
input:focus,
select:focus,
select:active,
textarea:focus,
button:focus,
button:active{
    outline: none;
}


.inner-nav{
    width: 97%;
    /* border: 1px dashed; */
}

.report_detail{
    flex: 1;
}

.report_value{
    flex: 2;
}

.reward_price{
    border: 2px solid #DA04F2;
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
.unline_pink{
    border-bottom: 1px solid #DA04F2;
}

.list_item:not(:last-child){
    padding-bottom: 10px;
}

.flex_1{
    flex: 1;
}

.flex_2{
    flex: 2;
}

.flex_3{
    flex: 3;
}

.flex_4{
    flex: 4;
}
</style>
