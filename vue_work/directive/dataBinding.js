const template = /*html*/`
<!--v-text, v-html 태그 내용(바디) 바인딩 -->
<div>{{htmlString}}</div>
<div v-text="htmlString"></div>
<div v-html="htmlString"></div>

<!--v-model 폼필드 바인딩 -->
<input type="text" class="form-control mb-3" v-model="memInfo.valueModel">
<input type="number" class="form-control mb-3" v-model.number = "memInfo.score">

<textarea class="form-control mb-3" v-model.lazy="memInfo.memo"></textarea>
<select class="form-control mb-3" v-model="memInfo.city">
<option value="02">서울</option>
<option value="21">부산</option>
<option value="064">제주</option>
</select>
<div class="form-check">
    <label class="form-label">서울</label>
    <input type ="checkbox" class="form-check-input" v-model="memInfo.mainYn" value ="02">
</div>
<div class="form-check">
    <label class="form-label">부산</label>
    <input type ="checkbox" class="form-check-input" v-model="memInfo.mainYn" value ="21">
</div>
<div class="form-check">
    <label class="form-label">제주</label>
    <input type ="checkbox" class="form-check-input" v-model="memInfo.mainYn" value ="064">
</div>
<div class="form-check">
    <label class="form-label">서울</label>
    <input type ="radio" class="form-check-input" v-model="memInfo.picked" value ="02">
</div>
<div class="form-check">
    <label class="form-label">부산</label>
    <input type ="radio" class="form-check-input" v-model="memInfo.picked" value ="21">
</div>
<div class="form-check">
    <label class="form-label">제주</label>
    <input type ="radio" class="form-check-input" v-model="memInfo.picked" value ="064">
</div>
<button class="btn btn-success" v-bind:disabled="memInfo.valueModel==''">등록</button>

<!--v-bind 태그 속성 바인딩 -->
<img v-bind:src="memInfo.profile">

<!--v-bind 클래스 속성 바인딩 -->
<div class="container mb-3" v-bind:class="{active : isActive, 'text-red' : hasError}" >클래스 바인딩</div>
<div class="container mb-3" v-bind:class="[activeClass, errorClass]" >클래스 배열 바인딩</div> <!--제어 안됨 -->
<div class="container mb-3" v-bind:style="styleObject" >인라인 스타일 바인딩</div>





<p v-text="memInfo" class="form-control"></p>

`;



export default {
    template,
    data(){ return {htmlString : /*html*/`<p style="color:red;">This is a red String.</p>`,
                    memInfo : {valueModel : 'South Korea',
                                score : 100,
                                memo : '메모 작성',
                            city : "21",
                            mainYn : ["02", "21"],
                            picked : "21", 
                            profile : "image.jfif"
                            },
                    isActive : true,
                    hasError : true,
                    activeClass : 'active',
                    errorClass : 'text-red',
                    styleObject : {color : 'red', fontSize : '13px' }

        };

    },
    methods : {}
}