/* Author : Tushar Sharma
* Add Table of Content in blogger (7 type provided)
* Url: http://eutectics.blogspot.com/2014/12/add-table-of-content-or-sitemap-in-blogger-blog.html
*/
var loadToc,loadCategories,_toc=
{
      init:function()
      {
            var c=
            {
                  homePage:"http://"+window.location.hostname,maxResults:30,numChars:270,thumbWidth:80,navText:"Next",resetToc:"Reset",noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",loading:"<span class='button disabled'>loading...</span>",counting:"<div class='eu-description-message'>counting Articles...</div>",searching:"<span class='button disabled'>searching...</span>"
            }
            ,
            d=document,k=d.getElementById("eu-feed-order"),h=d.getElementById("eu-label-sorter").parentNode,z=d.getElementById("eu-feed-searcher"),l=d.getElementById("eu-feed-searcher-text"),q=d.getElementById("eu-result-description"),m=d.getElementById("eu-feed-container"),n=d.getElementById("eu-feed-nav"),A=d.getElementsByTagName("head")[0],g=0,u=null,p="published",r=0,v="",f=
            {
                  a:function(b)
                  {
                        b=d.getElementById(b);
                        b.parentNode.removeChild(b)
                  }
                  ,b:function(b,a)
                  {
                        var c=d.createElement("script");
                        c.type="text/javascript";
                        c.id=a;c.src=b;d.getElementById(a)&&f.a(a);
                        A.appendChild(c)
                  }
                  ,c:function(b,a,d)
                  {
                        g++;q.innerHTML=c.counting;n.innerHTML=c[1 == b?"searching":"loading"];0 == =b?f.b(null != =a?c.homePage+"/feeds/posts/summary/-/"+a+"?alt=json-in-script&start-index="+(g*c.maxResults+1)+"&max-results="+c.maxResults+"&orderby="+d+"&callback=loadToc":c.homePage+"/feeds/posts/summary?alt=json-in-script&start-index="+(g*c.maxResults+1)+"&max-results="+c.maxResults+"&orderby="+d+"&callback=loadToc","temporer-script-1"):1 == b&&f.b(c.homePage+
                        "/feeds/posts/summary?alt=json-in-script&start-index="+(g*c.maxResults+1)+"&max-results="+c.maxResults+"&q="+a+"&orderby="+d+"&callback=loadToc","temporer-script-1");
                        u=null != =a?a:null;r=b;k.disabled=!0;h.children[0].disabled=!0
                  }
                  ,d:function(b)
                  {
                        var a;n.innerHTML="";
                        q.innerHTML=1 == r?'<div class="eu-description-message">Search results for keyword <strong>&#8220;'+v+"&#8221;</strong> ("+b.feed.openSearch$totalResults.$t+" found)</div>":'<div class="eu-description-message">Total: '+b.feed.openSearch$totalResults.$t+
                        " Articles</div>";
                        if("entry"in b.feed)
                        {
                              b=b.feed.entry;for(var s,w,l,x="0 comments",y,e=0;e<c.maxResults&&e != b.length;e++)
                              {
                                    s=b[e].title.$t;l="summary"in b[e]?b[e].summary.$t.replace(/<br ?\/?>/ig," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,c.numChars):"";
                                    y="media$thumbnail"in b[e]?b[e].media$thumbnail.url.replace(/\/s[0-9]+\-c/,"/s"+c.thumbWidth+"-c"):c.noImage.replace(/\/s[0-9]+\-c/,"/s"+c.thumbWidth+"-c");
                                    a=0;for(var t=b[e].link.length;a<t;a++)if("alternate" == b[e].link[a].rel)
                                    {
                                          w=b[e].link[a].href;
                                          break
                                    }
                                    a=0;for(t=b[e].link.length;a<t;a++)if("replies" == b[e].link[a].rel&&"text/html" == b[e].link[a].type)
                                    {
                                          x=b[e].link[a].title;break
                                    }
                                    a=d.createElement("li");
                                    a.innerHTML='<div class="eu-inner cf"><img style="width:'+c.thumbWidth+"px!important;height:"+c.thumbWidth+'px!important;max-width:none!important;max-height:none!important;" src="'+y+'" alt="'+s+'" class="eu-thumbnail"><a class="eu-title" href="'+w+'" target="_blank">'+s+"</a><strong> - ("+x+')</strong><br><div class="eu-summary">'+l+"&hellip;</div></div>";
                                    m.appendChild(a)
                              }
                              a=d.createElement("a");
                              a.className="button";
                              a.href="#load-more";
                              a.innerHTML=c.navText;a.onclick=function()
                              {
                                    f.c(r,u,p);
                                    return!1
                              }
                        }
                        else a=d.createElement("a"),a.className="button",a.href="#reset-content",a.innerHTML=c.resetToc,a.onclick=function()
                        {
                              g=-1;q.innerHTML=c.counting;m.innerHTML="";
                              f.c(0,null,"published");
                              k.innerHTML=k.innerHTML;h.children[0].innerHTML=h.children[0].innerHTML;return!1
                        }
                        k.disabled=!1;h.children[0].disabled=!1
                  }
                  ,e:function(b)
                  {
                        b=b.feed.category;
                        for(var a='<select id="eu-label-sorter"><option value="" selected disabled>Category...</option>',d=0,k=b.length;d<k;d++)a+='<option value="'+encodeURIComponent(b[d].term)+'">'+b[d].term+"</option>";
                        h.innerHTML=a+"</select>";
                        h.children[0].onchange=function()
                        {
                              g=-1;m.innerHTML="";
                              n.innerHTML=c.loading;f.c(0,this.value,p)
                        }
                  }
            }
            f.b(c.homePage+"/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories","temporer-script-2");
            k.onchange=function()
            {
                  g=-1;m.innerHTML="";
                  n.innerHTML=c.counting;h.children[0].innerHTML=h.children[0].innerHTML;f.c(0,null,this.value);
                  p=this.value
            }
            {
                  g=-1;m.innerHTML="";
                  v=l.value;f.c(1,l.value,p);
                  return!1
            }
      }
}
