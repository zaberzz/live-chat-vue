<template>
  <div class="chat-window">
    <div v-if="error" class="error"></div>
    <div v-if="document" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composable/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated } from "@vue/runtime-core";
export default {
  setup() {
    const { error, document } = getCollection("message");
    const formattedDocuments = computed(() => {
      if (document.value) {
        return document.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });
    return { error, document, formattedDocuments, messages };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
