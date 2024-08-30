<template>
    <section class="bg-gray-50 p-8 rounded-lg shadow-lg flex h-screen">
        <!-- Left Column -->
        <div class="w-1/3 pr-6 overflow-y-auto bg-gray-100 p-4 border-r border-gray-200">
            <p class="text-2xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                {{ appData?.category || 'Приложение' }}
            </p>
            <ul class="space-y-4">
                <li v-for="(item, index) in appData?.topics || []" :key="index">
                    <div class="flex items-center space-x-4">
                        <span
                            @click="clickInTopic(item.content)"
                            class="text-lg font-semibold text-gray-800 cursor-pointer hover:text-blue-500 transition duration-200"
                        >
                            {{ item.topic }}
                        </span>
                        <img
                            @click="getTopicArrayElements(item.topicInElements)"
                            v-if="item.topicInElements?.length > 0"
                            src="/rightarrow.png"
                            alt="Expand"
                            class="w-3 h-3 cursor-pointer transition-transform duration-300 transform hover:scale-110"
                        />
                    </div>
                    <ul v-if="item.topicInElements?.length > 0" class="pl-4 mt-2 space-y-2">
                        <li v-for="(subItem, subIndex) in selectedSubtopics" :key="subIndex">
                            <a
                                @click="clickInTopic(subItem.content)"
                                href="#"
                                class="block p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300 text-gray-800"
                            >
                                {{ subItem.title }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- Right Column -->
        <div class="w-2/3 ml-6 overflow-y-auto">
            <div class="text-gray-800 leading-relaxed bg-white p-6 rounded-lg shadow-md">
                {{
                    descriptionTopic ||
                    (appData?.topics?.length ? appData.topics[0].topic[0].content : '')
                }}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        appData: Object
    },
    data() {
        return {
            descriptionTopic: null,
            selectedSubtopics: []
        }
    },
    watch: {
        appData(newVal) {
            console.log('App Data changed:', newVal)
        }
    },
    methods: {
        clickInTopic(content) {
            if (content) {
                this.descriptionTopic = content
            }
        },
        getTopicArrayElements(topicArray) {
            if (Array.isArray(topicArray)) {
                this.selectedSubtopics = topicArray
            }
        }
    }
}
</script>

<style>
</style>