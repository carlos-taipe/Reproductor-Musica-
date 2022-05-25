<template>
<v-app>
      <div id="app" class="h-screen">
      <div class="flex" style="height: 88vh">
          <div class="w-56 bg-red-dark h-full flex-none">
              <div class="p-6">
                <img src="foxbel-music.png" alt="" class="h-10">
              </div>
              <div class="ml-6 text-white">
                <div class="mb-8">
                  <h1 class="text-lg font-bold">Mi librería</h1>
                  <nav class="text-base pl-2 leading-5" style="list-style:none">
                    <li class="hover:text-red">Recientes</li>
                    <li class="hover:text-red">Artistas</li>
                    <li class="hover:text-red">Albums</li>
                    <li class="hover:text-red">Canciones</li>
                    <li class="hover:text-red">Estaciones</li>
                  </nav>
                </div>
                <div>
                  <h1 class="text-lg font-bold">Playlist</h1>
                  <nav class="text-base pl-2 leading-5" style="list-style:none">
                    <li class="hover:text-red">Metal</li>
                    <li class="hover:text-red" >Para bailar</li>
                    <li class="hover:text-red">Rock 90s</li>
                    <li class="hover:text-red">Baladas</li>
                  </nav>
                </div>
              </div>
          </div>
          <div class="w-full h-full relative bg-white px-20 overflow-y-scroll">
              <div class="w-full sticky top-0 py-6 flex items-center justify-between mb-5 bg-white" style="z-index:2">
                <div class="flex items-center border border-gray-400 h-10 w-2/4" style="border-radius:100px">
                  <input type="text" placeholder="Buscar" class="border-none outline-none w-full ml-5" v-model="search_text" v-on:keyup.13="searchMusic(search_text)">
                  <button @click="searchMusic(search_text)"><i class="fa-solid fa-magnifying-glass mx-2" style="color:#BDBDBD"></i></button>
                </div>
                <div class="flex items-center">
                  <i class="fa-solid fa-user text-red"></i>
                  <h2 class="text-sm mx-4">Carlos T.</h2>
                </div>
              </div>
              <div class="py-2">
                  <div class="w-full flex" style="height:30vh">
                      <div class="w-auto" style="position:relative">
                          <img :src="this.song_selected.album_cover" alt="" style="width:100%;height:100%">
                          <div style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);">
                            <button @click="playSong()"><i class="fa-solid fa-play text-white text-6xl"></i></button>
                          </div>
                      </div>
                      <div class="w-full text-white p-10" style="background-color:#A70000">
                          <h1 class="text-base font-semibold tracking wide">{{this.song_selected.artist}} - {{this.song_selected.title}}</h1>
                          <div class="flex mb-3 items-center">
                            <h2 class="text-sm mr-3">Lo mejor de {{this.song_selected.artist}}</h2>
                            <h2 class="text-xs text-black font-bold">1,515,151 seguidores</h2>
                          </div>
                          <p>Lorem ipsum, dolor sit amet co  nobis corrupti cumque repudiandae non minima doloremque odit unde laborum perferendis quidem.</p>
                          <div class="flex mt-6 text-xs items-center">
                              <button class="bg-red mr-2 rounded-3xl py-2 px-6 btn-main" @click="playSong()">Reproducir</button>
                              <button class="bg-red mx-2 rounded-3xl py-2 px-6 btn-main">Seguir</button>
                              <i class="fa-solid fa-ellipsis ml-2 text-lg"></i>
                          </div>

                      </div>
                  </div>        
              </div>
              
              <div class="py-3 ">
                  <div class="w-full flex flex-wrap">
                    <div v-for="(song,index) in array_songs" :key="index" class="p-2 w-48">
                      <div class="bg-light w-full h-auto p-5">
                          <div style="position:relative">
                            <img :src="song.album.cover_big" alt="" class="h-auto w-full shadow mb-2">
                            <div style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);">
                              <button @click="playSong(song.id)"><i class="fa-solid fa-play text-white text-4xl"></i></button>
                            </div>
                            <div style="position:absolute; top:5%; right:5%;">
                              <button><i class="fa-solid fa-ellipsis-vertical text-white"></i></button>
                            </div>
                          </div>
                          <h1 class="text-sm font-semibold text-black tracking wide">{{song.artist.name}}</h1>
                          <h2 class="text-xs">{{song.title_short}}</h2>

                        </div>
                    </div>
                  </div>        
              </div>
          </div>
      </div>
      <!-- play bar -->
      <div class="w-full flex itmes-center bg-red-light justify-between" style="height:12vh">
          <div class="flex items-center">
              <div class="flex">
                <div style="height:12vh">
                      <img :src="this.song_playing.album_cover" alt="" style="width:100%;height:100%">
                </div>
                <div class="align-middle ml-4 my-auto text-white">
                  <h1 class="text-sm font-semibold tracking-wide">{{this.song_playing.title}}</h1>
                  <h2 class="text-xs ">{{this.song_playing.artist}}- {{this.song_playing.album}}</h2>
                </div>
              </div>
          </div>
          <div class="flex flex-col justify-center w-1/2 items-center">
              <div class="flex items-center text-white">
                  <button class="mx-5"><i class="fa-solid fa-backward-step"></i></button>
                  <button v-if="this.song_playing.state == false" class="mx-5" @click="playSong(song_playing.id)"><i class="fa-solid fa-play"></i></button>
                  <button v-else class="mx-5" @click="pauseSong"><i class="fa-solid fa-pause"></i></button>
                  <button class="mx-5"><i class="fa-solid fa-forward-step"></i></button>
              </div>
          </div>
          <div class="flex items-center mr-10 text-white">
                <v-slider 
                  v-model="media"
                  class="mt-5 mr-5 w-40"
                  color="white"
                  track-color="bg-red"
                ></v-slider>
              <button><i class="fa-solid fa-volume-high"></i></button>           
          </div>
      </div>
  </div>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
       media: 10,
       search_text: null,
       audio: new Audio(),
       song_selected: {
         id: 0,
         title: null,
         artist: null,
         album: null,
         album_cover: null
       },
       song_playing: {
         id: 0,
         title: null,
         artist: null,
         album: null,
         album_cover: null,
         preview: null,
         state: false
       },
       array_songs: Array,
  }),
  
  watch: {
      media(){
          this.changeVolume();
      }
  },

  created(){
    this.searchMusic('Adele');
  },

  methods: {
    changeVolume(){
      var self = this;
      self.audio.volume = self.media/100;
    },

    playSong(music_id){
      var self = this;
      
      if(!music_id){
        music_id = this.song_selected.id;
      }

      const axios = require("axios");

      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/track/' + music_id,
        headers: {
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
          'X-RapidAPI-Key': 'a9f67e4a1emshe7cfa7dc0850460p170e8djsn808d6314d4a5'
        }
      };

      axios.request(options).then(function (response) {
        self.song_playing.title = response.data.title_short;
        self.song_playing.artist = response.data.artist.name;
        self.song_playing.album_cover = response.data.album.cover_xl;
        self.song_playing.album = response.data.album.title;
        self.song_playing.id = response.data.id;
        self.song_playing.preview = response.data.preview;
        if(self.song_playing.state == true){
          self.audio.pause();
          self.audio.currentTime = 0;
        }
        self.song_playing.state = true;
        self.audio = new Audio(self.song_playing.preview);
        self.audio.volume = self.media / 100;
        self.audio.play();
        // self.audio(self.song_playing.preview);
        // self.audio.play();
      }).catch(function (error) {
        console.error(error);
      });
    },

    pauseSong(){
      var self = this;
      self.audio.pause();
      self.song_playing.state = false;
    },

    searchMusic(text){
        var self = this;
        const axios = require("axios");
        
        const options = {
          method: 'GET',
          url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
          params: {q: text},
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': 'd14772cea8msh5fb1fd078db0e90p1e07f8jsn1c9323e797f8'
          }
        };

        axios.request(options).then(function (response) {
          self.song_selected.title = response.data.data[0].title_short;
          self.song_selected.artist = response.data.data[0].artist.name;
          self.song_selected.album_cover = response.data.data[0].album.cover_xl;
          self.song_selected.album = response.data.data[0].album.title;
          self.song_selected.id = response.data.data[0].id;

          self.array_songs = response.data.data;

          if(self.song_playing.id === 0 ){
              self.song_playing.title = self.song_selected.title;
              self.song_playing.artist = self.song_selected.artist;
              self.song_playing.album_cover = self.song_selected.album_cover;
              self.song_playing.album = self.song_selected.album;
              self.song_playing.id = self.song_selected.id;
            }

        }).catch(function (error) {
          console.error(error);
        });
    }
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

#app {
  font-family: 'Quicksand', sans-serif;
  user-select: none;
}

.btn-main:hover{
  background-color: transparent;
  border: 1px solid #E86060;
  color: #E86060;
}
</style>
