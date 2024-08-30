<template>
    <div>
        <header
            class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white min-w-full shadow-lg"
        >
            <!-- Left Section: Burger Menu and Logo -->
            <div class="flex items-center space-x-6">
                <!-- Burger Menu -->
                <button
                    @click="toggleMenu"
                    class="flex items-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <svg
                        class="w-8 h-8 text-white hover:text-blue-500 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                <!-- Logo -->
                <img src="/header-icon.png" class="w-20 h-20" alt="Logo" />
            </div>

            <!-- Search Bar -->
            <div class="flex-grow flex items-center justify-center">
                <div
                    class="flex items-center bg-gray-700 p-3 rounded-lg shadow-inner w-2/3 hover:border-blue-500 transition border duration-300"
                >
                    <img src="/search_icon.png" alt="Search Icon" class="w-6 h-6 mr-3" />
                    <input
                        class="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
            </div>

            <!-- Profile Icon -->
            <div>
                <img
                    src="/auth_icon_2.png"
                    alt="Profile"
                    class="w-12 h-12 rounded-full border-2 border-gray-600 hover:border-blue-500 transition duration-300"
                />
            </div>
        </header>

        <!-- Menu -->
        <nav v-if="isMenuOpen" class="bg-white p-4 border-b border-gray-300">
            <ul class="flex flex-wrap items-center justify-evenly transition">
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Picomed')"
                >
                    Пикомед
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('LIS')"
                >
                    ЛИС
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Ejournals')"
                >
                    Электронные журналы
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Apteka')"
                >
                    Аптека
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Active Directory')"
                >
                    Active Directory
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Linux')"
                >
                    Linux
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Комета PACS')"
                >
                    Комета PACS
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Софт')"
                >
                    Софт
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Сайт')"
                >
                    Сайт
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Анализаторы')"
                >
                    Анализаторы
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Кассовые аппараты')"
                >
                    Кассовые аппараты
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('Service Desk')"
                >
                    Service Desk
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('ELMA')"
                >
                    ELMA
                </li>
                <li
                    class="block text-black p-2 rounded hover:bg-gray-500 cursor-pointer"
                    @click="clickApp('ЕИП')"
                >
                    ЕИП
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    props: {
        sendData: Function
    },
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        async clickApp(name) {
            try {
                const respone = await axios.get('/api/select-app', {
                    params: { name }
                })
                const appData = respone.data.data
                this.sendData(appData)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<style>
</style>