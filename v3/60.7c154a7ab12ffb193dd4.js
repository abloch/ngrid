(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{ZfLp:function(e,n,t){"use strict";function r(){return t.e(12).then(t.t.bind(null,"NZy3",7))}t.r(n),t.d(n,"DataStore",function(){return s});class s{constructor(){this.customers=[],this.people=[],this.sellers=[]}reset(...e){for(const n of e)this[n]=[]}getCustomersSync(e=500){return this.customers.slice(0,e)}getCustomers(e=1e3,n=500){return this.wait(e).then(()=>r()).then(e=>{if(this.customers.length<n)for(let t=this.customers.length;t<n;t++){const n={id:t+1,name:e.name.findName(),country:e.address.countryCode(),jobTitle:e.name.jobTitle(),accountId:e.finance.account(),accountType:e.finance.accountName(),currencyCode:e.finance.currencyCode(),primeAccount:e.random.boolean(),balance:e.random.number({min:-5e4,max:5e4,precision:2}),creditScore:e.random.number(4)+1,monthlyBalance:Array.from(new Array(12)).map(()=>e.random.number({min:-15e3,max:15e3,precision:2}))};this.customers.push(n)}return this.customers.slice(0,n)})}getPeopleSync(e=500){return this.people.slice(0,e)}getPeople(e=1e3,n=500){return this.wait(e).then(()=>r()).then(e=>{if(this.people.length<n)for(let t=this.people.length;t<n;t++){const n={id:t,name:e.name.findName(),email:e.internet.email(),gender:e.random.arrayElement(["Male","Female"]),country:e.address.countryCode(),birthdate:e.date.past().toISOString(),bio:e.lorem.paragraph(),language:"EN",lead:e.random.boolean(),balance:e.random.number({min:-2e4,max:2e4,precision:2}),settings:{background:e.internet.color(),timezone:"UTC",emailFrequency:e.random.arrayElement(["Daily","Weekly","Yearly","Often","Seldom","Never"]),avatar:e.image.avatar()},lastLoginIp:e.internet.ip()};this.people.push(n)}return this.people.slice(0,n)})}getSellersSync(e=500){return this.sellers.slice(0,e)}getSellers(e=1e3,n=500){return this.wait(e).then(()=>r()).then(e=>{if(this.sellers.length<n)for(let t=this.sellers.length;t<n;t++){const n={id:t,name:e.name.findName(),company:e.company.companyName(),department:e.commerce.department(),country:e.address.countryCode(),email:e.internet.email(),sales:e.random.number({min:0,max:2e5,precision:2}),rating:e.random.number(4)+1,feedback:e.random.number({min:5,max:100}),address:[e.address.streetAddress(),e.address.city(),e.address.stateAbbr(),e.address.zipCode()].join(", ")};this.sellers.push(n)}return this.sellers.slice(0,n)})}wait(e){return new Promise(n=>{setTimeout(n,e)})}}}}]);