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
                    <span class="bg-gray-100 p-2 font_10 rounded-md justify-between flex-1 mr-2 flex justify-between items-center">
                        Sort by Latest Activities <i class="fas fa-angle-down"></i>
                    </span>
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
                <div class="flex justify-between mb-2">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_gray2 p-2 rounded-md color_blue">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            <div class="px-6 py-3 border-b">
                <div class="flex justify-between mb-2">
                    <div class="flex items-center">
                        <span class="font_12 mr-4 bg_lightpink p-2 rounded-md color_gray">#YHW-PGM2453-B</span>
                        <img src="../assets/img/chat_icon.svg" alt="">
                    </div>
                    <span class="font-bold">2020-12-11</span>
                </div>
                <p class="font-bold mb-2 font_13">Insecure Direct Object Reference on https:...</p>
                <span class="font_12 font-bold bg_lightblue py-2 px-3 rounded-md color_blue">YesWeBot</span>
            </div>
            
        </aside>
        <section class="border dashboard_content">
            <nav>
                
            </nav>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style>
.dashboard_side {
    /* border: 1px dashed; */
    flex: 1;
}

.dashboard_content{
    flex: 3;
    border: 1px dashed;
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
</style>
