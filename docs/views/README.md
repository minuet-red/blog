---
title: 概览
sidebar: true
date: 2020-08-21
sidebarDepth: 0
isShowComments: false
---

<div class="list">
    <div class="cc rowup">
        <div class="item"></div>
    </div>
</div>

<script>
	export default {
		data() {
			return {
                changeTime: '60000',
				index: 2,
				active: 'active'
			}
		},
		mounted() {
			this.updateTime(this.changeTime);
			this.randomPic()
		},
		updated() {
		},
		methods: {
    		randomPic() {
				let picList = ['kQWXr.gif','rddek.gif'];
				let imgShow = document.getElementById("imgShow");
				setInterval(() => {
					if(this.active == 'active'){
						this.active="noActive"
					}else {
						this.active="active";
					}
					this.imgSrc = '/znote/view/' + picList[Math.floor(Math.random() * picList.length)]

				}, 5000)
			},
	
			updateTime(time) {
				setInterval(() => {
			      if (this.index%2 == 0) {
			      	this.changeTime = '300'
			      }
			      if (this.index%2 != 0) {
			      	this.changeTime = time
			      }
			      this.index++;
			    }, 6000)
			}
		}
	
	}
</script>

<style lang='stylus' scoped> 
	@keyframes rowup {
        0% {
            -webkit-transform: translate3d(0, 15%, 0);
            transform: translate3d(0, 15%, 0);
        }
        100% {
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
    }
    .list{
        display: none;
        border: 1px solid #999;
        /*margin: 20px auto;*/
        position: relative;
        height: 200px;
        overflow: hidden;
        text-align: center;
        font-size: 14px;
        border-radius: 3px;
        width: 150px;
    }
    .list .rowup{
        -webkit-animation: 50s rowup linear infinite normal;
        animation: 50s rowup linear infinite normal;
        position: relative;
    }

	img.noActive{
		opacity: 0;
		transition: opacity 5s linear;
		pointer-events: none;
	}
	img.active{
		opacity: 1;
		transition: opacity 5s linear;
		pointer-events: none;
	} 
	.content__default:not(.custom) img {
	    max-width: 20% !important;
	    margin-top: -10px;
	    //padding-left: 26%;
	}

	#category {
		width:100px;
		height:100px;
		float: right;
		border-radius: 25%;
		background:#ffff0059;
		transition:width 2s, height 2s;
		-moz-transition:width 2s, height 2s, -moz-transform 2s; /* Firefox 4 */
		-webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
		-o-transition:width 2s, height 2s, -o-transform 2s; /* Opera */
	}
	#category:hover {
		width:100px;
		height:100px;
		transform:rotate(360deg);
		-moz-transform:rotate(360deg); /* Firefox 4 */
		-webkit-transform:rotate(360deg); /* Safari and Chrome */
		-o-transform:rotate(360deg	); /* Opera */
	}
	
	#tag {
		width:100px;
		height:100px;
		float: right;
		border-radius: 25%;
		background:#ffff0059;
		transition:width 2s, height 2s;
		-moz-transition:width 2s, height 2s, -moz-transform 2s; /* Firefox 4 */
		-webkit-transition:width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
		-o-transition:width 2s, height 2s, -o-transform 2s; /* Opera */
	}
	#tag:hover {
		width:100px;
		height:100px;
		transform:rotate(360deg);
		-moz-transform:rotate(360deg); /* Firefox 4 */
		-webkit-transform:rotate(360deg); /* Safari and Chrome */
		-o-transform:rotate(360deg	); /* Opera */
	}
	
	#category p,#tag p {
	    margin: 0;
	    line-height: 100px;
	    text-align: center;
	    font-size: 15px;
	}
	#category,#tag {
        margin-top: 18px;
    }
	
	#fj,#se {
		margin-top: 32px;
	}
	
	@media screen and (max-width: 960px){
	    .catalog-graph {
	        display: none;
	    }
		.content__default:not(.custom) img {
		    max-width: 35% !important;
		    margin: 17px;
		    padding-left: 26%;
		}
		.list {
		    margin: auto;
		}
		#fj,#se {
			font-size: 13px !important;
		}
		#category,#tag {
		    margin: 3% 0;
		    margin-top: 28px;
			width:80px;
			height:80px;
		}
		#category:hover,#tag:hover {
			width:80px;
			height:80px;
		}
		#category p,#tag p {
		    line-height: 80px;
	        font-size: 14px;
	    }
	}
	
	@media screen and (max-width: 320px){
		#fj,#se {
			font-size: 10px !important;
		}
	}
</style>


