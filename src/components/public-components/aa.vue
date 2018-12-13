<template>
  <div class="collapse navbar-collapse" id="example-navbar-collapse">
                <ul class="nav navbar-nav">
                   <li v-for="(item,key,index) in navData" :key="key" :class="item.class" @mouseover="item.ul[0] && showList()" @mouseout="item.ul[0] && hideList()">
                     <router-link :to="item.path">
                       <a :href="item.link" class="dropdown-toggle" data-toggle="dropdown">
                         {{item.content}} <b v-if="item.ul[0]" class="caret"></b>
                       </a>
                     </router-link>
                     <ul class="dropdown-menu" v-if="item.ul[0]">
                       <li v-for="(items,indexx) in item.ul" :key="indexx"><a :href="items[0]">{{items[1]}}</a><hr></li>                          
                     </ul>
                   </li>
                </ul>
            </div>
</template>
