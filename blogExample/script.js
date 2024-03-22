//createApp : VueJs 애플리케이션을 초기화하고 initial 객체를 매개변수로 받음
//mount : VueJs앱이 담길 컨테이너 selector를 넣어줌
//#app이 VueJS 앱이 담길 컨테이너 ID가 됨
//애플리케이션에 데이터를 추가하려면 createApp 함수에 넣는 initial 객체에 data 함수를 이용
//data 함수에서 반환하는 객체에 추가하려는 데이터 넣기
Vue.createApp({
    data(){
        return {
            message: 'Hello world',
            exampleName: 'hyon',
            linkValue : 'https://www.google.com'
        }
    },
    methods : {
        getMessage: () => 'Hello method',
        getNameGreeting : function(){
            return `Hello ${this.exampleName}`
        },
    },
}).mount('#app')