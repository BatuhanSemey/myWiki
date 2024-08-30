<template>
    <div class="bg-gray-100 flex justify-center items-center h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">
                Добро пожаловать в Wiki
            </h2>
            <form action="" method="POST" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700"
                        >Пароль</label
                    >
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            type="checkbox"
                            id="remember-me"
                            name="remember-me"
                            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900"
                            >Запомнить меня</label
                        >
                    </div>
                    <div class="text-sm">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500"
                            >Забыли пароль?</a
                        >
                    </div>
                </div>
                <div>
                    <button
                        @click="getAuthorization()"
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Войти
                    </button>
                </div>
                <div class="text-center">
                    <p class="text-sm text-gray-600">
                        У вас нет учетной записи?
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500"
                            >Зарегистрироваться?</a
                        >
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        
    },
    methods: {
        
    }
}
</script>

<style>
</style>