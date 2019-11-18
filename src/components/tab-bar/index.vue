<template>
  <div class="tab-bar">
    <router-link :class="['tab-bar-item ','tab-bar-item-'+item.path.toLowerCase()]" v-for="(item,index) in tabBar"
                 :key="index" tag="div" :to="{name:item.path}">
      <div class="tab-bar-item_icon"></div>
      <span class="tab-bar-item_content" v-text="item.content"></span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        tabBar: [
          {
            content: '首页',
            path: 'Index'
          },
          {
            content: '剧院',
            path: 'Theatre'
          },
          {
            content: '票夹',
            path: 'Ticket'
          },
          {
            content: '我的',
            path: 'Mine'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab-bar {
    height: 98px;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fefefe;
    border-top: 1px solid #f0f0f0;

    .tab-bar-item {
      height: 100%;
      text-align: center;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.tab-bar-item-index {
        > .tab-bar-item_icon {
          background-image: url("./../../assets/img/tab-bar/index.png");
        }

        &.focus {
          > .tab-bar-item_icon {
            background-image: url("./../../assets/img/tab-bar/index_focus.png");
            width: 84px;
            height: 84px;
            align-self: center;
          }

          > .tab-bar-item_content {
            display: none;
          }
        }
      }

      &.tab-bar-item-theatre {
        > .tab-bar-item_icon {
          background-image: url("./../../assets/img/tab-bar/theatre.png");
        }

        &.focus {
          > .tab-bar-item_icon {
            background-image: url("./../../assets/img/tab-bar/theatre_focus.png");
          }
        }
      }

      &.tab-bar-item-ticket {
        .tab-bar-item_icon {
          background-image: url("./../../assets/img/tab-bar/ticket.png");
        }

        &.focus {
          > .tab-bar-item_icon {
            background-image: url("./../../assets/img/tab-bar/ticket_focus.png");
          }
        }
      }

      &.tab-bar-item-mine {
        > .tab-bar-item_icon {
          background-image: url("./../../assets/img/tab-bar/mine.png");
        }

        &.focus {
          > .tab-bar-item_icon {
            background-image: url("./../../assets/img/tab-bar/mine_focus.png");
          }
        }
      }

      .tab-bar-item_icon {
        width: 60px;
        height: 60px;
        background-size: 100% 100%;
      }

      .tab-bar-item_content {
        font-size: 22px;
      }
    }

  }
</style>
