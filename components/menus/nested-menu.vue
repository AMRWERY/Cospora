<!-- <template>
  <div>
    <div class="inline-block group">
      <nuxt-link to="" class="block text-lg font-bold">New In</nuxt-link>
      <ul
        class="absolute transition duration-150 ease-in-out origin-top transform scale-0 bg-white rounded-sm group-hover:scale-100 min-w-56">
        <li class="px-3 py-1 text-sm font-thin cursor-pointer">Sustoproines</li>
        <li class="px-3 py-1 text-sm font-thin cursor-pointer">Destetos Sarcudos</li>
        <li class="relative px-3 py-1 text-sm font-thin cursor-pointer">
          <button class="flex items-center w-full text-left outline-none focus:outline-none">
            <span class="flex-1 pr-1">Hendrer Dulamcos</span>
            <span class="mr-auto">
              <icon name="material-symbols:arrow-forward-ios-rounded"
                class="w-3 h-3 transition duration-150 ease-in-out fill-current" />
            </span>
          </button>
          <ul
            class="absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left bg-white rounded-sm min-w-48">
            <li class="px-3 py-1 hover:bg-gray-100">Bibendumetos</li>
            <li class="px-3 py-1 text-sm font-thin cursor-pointer">
              Dincidunteros
            </li>
            <li class="px-3 py-1 hover:bg-gray-100">Loremouticas</li>
            <li class="px-3 py-1 hover:bg-gray-100">Pellentes Habitanto</li>
            <li class="px-3 py-1 hover:bg-gray-100">Scelerisque Yurnas</li>
          </ul>
        </li>
        <li class="px-3 py-1 text-sm font-thin cursor-pointer">Loremous</li>
        <li class="px-3 py-1 text-sm font-thin cursor-pointer">Maecenas Conguros</li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
li>ul {
  transform: translatex(100%) scale(0)
}

li:hover>ul {
  transform: translatex(101%) scale(1)
}

li>button svg {
  transform: rotate(-90deg)
}

li:hover>button svg {
  transform: rotate(-270deg)
}

.group:hover .group-hover\:scale-100 {
  transform: scale(1)
}

.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg)
}

.scale-0 {
  transform: scale(0)
}

.min-w-32 {
  min-width: 8rem
}
</style> -->


<template>
   <div class="flex">
      <!-- Sidebar -->
      <div class="w-64 mt-4 text-black">
         <ul>
            <!-- Level 1 Items -->
            <li v-for="item in sidebarItems" :key="item.id" class="text-sm">
               <button class="flex items-center justify-between w-full px-4 py-2 text-left"
                  @click="toggleItem(item.id)">
                  <span>{{ item.label }}</span>
                  <span v-if="item.children">
                     <icon :name="'material-symbols-light:keyboard-arrow-down-rounded'"
                        class="w-5 h-5 mt-1 transition-transform"
                        :style="{ transform: isOpen(item.id) ? 'rotate(180deg)' : 'rotate(0deg)' }" />
                  </span>
               </button>

               <!-- Level 2 -->
               <ul v-if="item.children" :class="{ hidden: !isOpen(item.id) }" class="pl-4">
                  <li v-for="subItem in item.children" :key="subItem.id">
                     <button class="flex items-center justify-between w-full px-4 py-2 text-left rounded"
                        @click="toggleItem(subItem.id)">
                        <span>{{ subItem.label }}</span>
                        <span v-if="subItem.children">
                           <icon :name="'material-symbols-light:keyboard-arrow-down-rounded'"
                              class="w-5 h-5 mt-1 transition-transform"
                              :style="{ transform: isOpen(subItem.id) ? 'rotate(180deg)' : 'rotate(0deg)' }" />
                        </span>
                     </button>

                     <!-- Level 3 -->
                     <ul v-if="subItem.children" :class="{ hidden: !isOpen(subItem.id) }" class="pl-4">
                        <li v-for="subSubItem in subItem.children" :key="subSubItem.id">
                           <button class="w-full px-4 py-2 text-left rounded">
                              {{ subSubItem.label }}
                           </button>
                        </li>
                     </ul>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   </div>
</template>

<script setup>
const sidebarItems = ref([
   {
      id: 1,
      label: "New In",
      children: [
         {
            id: 21,
            label: "Sustoproines",
         },
         {
            id: 22,
            label: "Destetos Sarcudos",
         },
         {
            id: 23,
            label: "Hendrer Dulamcos",
            children: [
               { id: 221, label: "Bibendumetos" },
               { id: 222, label: "Dincidunteros" },
               { id: 223, label: "Loremouticas" },
               { id: 224, label: "Pellentes Habitanto" },
               { id: 225, label: "Scelerisque Yurnas" },
            ],
         },
         {
            id: 24,
            label: "Loremous",
         },
         {
            id: 25,
            label: "Maecenas Conguros",
         },
      ],
   },
   {
      id: 2,
      label: "Makeup",
      children: [
         {
            id: 31, label: "Lorem Dorus", children: [
               { id: 226, label: 'Maecenas Commodos' },
               { id: 227, label: 'Milancelos' },
               { id: 228, label: 'Malesuada Sarcus' },
               { id: 229, label: 'Cosmopolis' },
               { id: 230, label: 'Fermentum' },
               { id: 231, label: 'Molateas' },
               { id: 232, label: 'Destiblum Mauris' },
            ]
         },
         {
            id: 32, label: "Milancelos", children: [
               { id: 233, label: 'Maecenas Commodos' },
               { id: 234, label: 'Malesuada Sarcus' },
               { id: 235, label: 'Frementum Loremous' },
               { id: 236, label: 'Milancelos' },
               { id: 237, label: 'Cosmopolis' },
            ]
         },
         {
            id: 33, label: "Cosmopolis", children: [
               { id: 238, label: 'Commodos' },
               { id: 239, label: 'Milancelos' },
               { id: 240, label: 'Frementum Loremous' },
               { id: 241, label: 'Molateas' },
            ]
         },
         {
            id: 34, label: "Nor Loremirus", children: [
               { id: 242, label: 'Maecenas Commodos' },
               { id: 243, label: 'Milancelos' },
               { id: 244, label: 'Malesuada Sarcus' },
               { id: 245, label: 'Cosmopolis' },
               { id: 246, label: 'Frementum Loremous' },
               { id: 247, label: 'Habitasse Molateas' },
            ]
         },
         {
            id: 35, label: "Dapibor", children: [
               { id: 248, label: 'Maecenas Commodos' },
               { id: 249, label: 'Frementum Loremous' },
               { id: 250, label: 'Habitasse Molateas' },
               { id: 251, label: 'Malesuada Sarcus' },
            ]
         },
      ],
   },
   {
      id: 3,
      label: "Nail",
      children: [
         {
            id: 36, label: "Lorem Dorus", children: [
               { id: 252, label: 'Maecenas Commodos' },
               { id: 253, label: 'Malesuada' },
               { id: 254, label: 'Frementum Loremous' },
               { id: 255, label: 'Habitasse Molateas' },
            ]
         },
         {
            id: 37, label: "Comos Milano", children: [
               { id: 256, label: 'Maecenas Commodos' },
               { id: 257, label: 'Malesuada' },
               { id: 258, label: 'Frementum Loremous' },
               { id: 259, label: 'Habitasse Molateas' },
            ]
         },
         {
            id: 38, label: "Milancelos", children: [
               { id: 256, label: 'Maecenas Commodos' },
               { id: 257, label: 'Malesuada' },
               { id: 258, label: 'Frementum Loremous' },
               { id: 259, label: 'Dincidunteros' },
            ]
         },
         {
            id: 39, label: "Nor Loremrus", children: [
               { id: 260, label: 'Maecenas Commodos' },
               { id: 261, label: 'Malesuada Sarcus' },
               { id: 262, label: 'Frementum Loremous' },
               { id: 263, label: 'Loremirus Now' },
            ]
         },
         {
            id: 40, label: "Cosmopolis", children: [
               { id: 260, label: 'Commodos' },
               { id: 261, label: 'Milancelos' },
               { id: 262, label: 'Frementum Loremous' },
               { id: 263, label: 'Molateas' },
            ]
         },
         {
            id: 41, label: "Dapibor", children: [
               { id: 260, label: 'Maecenas Commodos' },
               { id: 262, label: 'Frementum Loremous' },
               { id: 261, label: 'Habitasse Molateas' },
               { id: 263, label: 'Malesuada' },
            ]
         },
      ],
   },
   {
      id: 4,
      label: "Accessories",
      children: [
         {
            id: 42, label: "Lorem Dorus", children: [
               { id: 264, label: 'Maecenas Commodos' },
               { id: 265, label: 'Malesuada' },
               { id: 266, label: 'Frementum Loremous' },
               { id: 267, label: 'Habitasse Molateas' },
            ]
         },
         {
            id: 43, label: "Comos Milano", children: [
               { id: 268, label: 'Maecenas Commodos' },
               { id: 269, label: 'Malesuada' },
               { id: 270, label: 'Frementum Loremous' },
               { id: 271, label: 'Habitasse Molateas' },
            ]
         },
         {
            id: 44, label: "Milancelos", children: [
               { id: 272, label: 'Maecenas Commodos' },
               { id: 273, label: 'Malesuada' },
               { id: 274, label: 'Frementum Loremous' },
               { id: 275, label: 'Dincidunteros' },
            ]
         },
         {
            id: 45, label: "Nor Loremrus", children: [
               { id: 276, label: 'Maecenas Commodos' },
               { id: 277, label: 'Malesuada Sarcus' },
               { id: 278, label: 'Frementum Loremous' },
               { id: 279, label: 'Loremirus Now' },
            ]
         },
         {
            id: 46, label: "Cosmopolis", children: [
               { id: 280, label: 'Commodos' },
               { id: 281, label: 'Milancelos' },
               { id: 282, label: 'Frementum Loremous' },
               { id: 283, label: 'Molateas' },
            ]
         },
         {
            id: 47, label: "Dapibor", children: [
               { id: 284, label: 'Maecenas Commodos' },
               { id: 285, label: 'Frementum Loremous' },
               { id: 286, label: 'Habitasse Molateas' },
               { id: 287, label: 'Malesuada' },
            ]
         },
      ],
   },
   {
      id: 5,
      label: "Makeup Tools",
      children: [
         {
            id: 48, label: "Lorem Dorus", children: [
               { id: 288, label: 'Maecenas Commodos' },
               { id: 289, label: 'Malesuada' },
               { id: 290, label: 'Frementum Loremous' },
               { id: 291, label: 'Habitasse Molateas' },
            ]
         },
         {
            id: 49, label: "Comos Milano", children: [
               { id: 292, label: 'Maecenas Commodos' },
               { id: 293, label: 'Malesuada' },
               { id: 294, label: 'Frementum Loremous' },
               { id: 295, label: 'Habitasse Molateas' },
            ]
         },
         {
            id: 50, label: "Milancelos", children: [
               { id: 296, label: 'Maecenas Commodos' },
               { id: 297, label: 'Malesuada' },
               { id: 298, label: 'Frementum Loremous' },
               { id: 299, label: 'Dincidunteros' },
            ]
         },
         {
            id: 51, label: "Nor Loremrus", children: [
               { id: 300, label: 'Maecenas Commodos' },
               { id: 301, label: 'Malesuada Sarcus' },
               { id: 302, label: 'Frementum Loremous' },
               { id: 303, label: 'Loremirus Now' },
            ]
         },
      ],
   },
]);

const openItems = ref([]);

const toggleItem = (id) => {
   if (openItems.value.includes(id)) {
      openItems.value = openItems.value.filter((item) => item !== id);
   } else {
      openItems.value.push(id);
   }
};

const isOpen = (id) => openItems.value.includes(id);
</script>

<style scoped>
.rotate-180 {
   transform: rotate(180deg);
}
</style>