<template>
    <div>
        <user-header></user-header>
      
        <div class=" stats">
            <div>
                 <h3>Profile View Count Ratio </h3>
                <apexchart width="380" type="donut" :options="dchartOptions" :series="dseries"></apexchart>
            </div>
             <div>
                 <h3>Profile View Counts(Weekly)</h3>
                 <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
             </div>
             <div>
                 <h3>Profile View Counts By other Teachers(Weekly)</h3>
                 <apexchart width="500" type="bar" :options="fchartOptions" :series="fseries"></apexchart>
             </div>

            <div>
                 <h3>Profile View Counts(Monthly)</h3>
                 <apexchart width="800" type="bar" :options="mchartOptions" :series="mseries"></apexchart>
             </div>
            <div>
                 <h3>Profile View Counts By other Teachers(Monthly)</h3>
                 <apexchart width="800" type="bar" :options="fmchartOptions" :series="fmseries"></apexchart>
             </div>             
             
            
        </div>
       
    </div>

</template>
<script>

export default {

    data() {
        return {
            facultyId: "",
            chartOptions: {
                chart: { id: "vuechart-example",fontFamily: 'Montserrat, sans-serif'},
                dataLabels: {
                             style: {
                                colors: ['#0d0d0d',] }
                        },
                yaxis:{title:{text:"No of Profile Visits"}},                
                xaxis: {
                     title:{text:'Days'},
                    categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    },
                },
            series: [
                {
                     name: "Views",
                     data: [this.ViewsEachDay('sunday'), this.ViewsEachDay('monday'), this.ViewsEachDay('tuesday'), this.ViewsEachDay('wednesday'), this.ViewsEachDay('thursday'), this.ViewsEachDay('friday'), this.ViewsEachDay('saturday')],
                },
            ],
            fchartOptions: {
                chart: { id: "vuechart-example",fontFamily: 'Montserrat, sans-serif'},
                dataLabels: {
                             style: {
                                colors: ['#0d0d0d',] }
                        },  
                yaxis:{title:{text:"No of Profile Visits"}},              
                xaxis: {
                    title:{text:'Days'},
                    categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    },
                },
            fseries: [
                {
                     name: "Views",
                     data: [this.ViewsEachDay('fsunday'), this.ViewsEachDay('fmonday'), this.ViewsEachDay('ftuesday'), this.ViewsEachDay('fwednesday'), this.ViewsEachDay('fthursday'), this.ViewsEachDay('ffriday'), this.ViewsEachDay('fsaturday')],
                },
            ], 
            mchartOptions: {
                chart: { id: "vuechart-example",fontFamily: 'Montserrat, sans-serif'},
                dataLabels: {
                             style: {
                                colors: ['#0d0d0d',] }
                        }, 
                yaxis:{title:{text:"No of Profile Visits"}},               
                xaxis: {
                    title:{text:'Months'},
                    categories: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
                    },
                },
            mseries: [
                {
                     name: "Views",
                     data: [this.ViewsEachMonth('January'), this.ViewsEachMonth('February'), this.ViewsEachMonth('March'), this.ViewsEachMonth('April'), this.ViewsEachMonth('May'), this.ViewsEachMonth('June'), this.ViewsEachMonth('July'),this.ViewsEachMonth('August'),this.ViewsEachMonth('September'),this.ViewsEachMonth('October'),this.ViewsEachMonth('November'),this.ViewsEachMonth('December')],
                },
            ],
            fmchartOptions: {
                chart: { id: "vuechart-example",fontFamily: 'Montserrat, sans-serif'},
                dataLabels: {
                             style: {
                                colors: ['#0d0d0d',] }
                        },
                yaxis:{title:{text:"No of Profile Visits"}},
                xaxis: {
                    title:{text:'Months'},
                    categories: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
                    },
                },
            fmseries: [
                {
                     name: "Views",
                     data: [this.ViewsEachMonth('fJanuary'), this.ViewsEachMonth('fFebruary'), this.ViewsEachMonth('fMarch'), this.ViewsEachMonth('fApril'), this.ViewsEachMonth('fMay'), this.ViewsEachMonth('fJune'), this.ViewsEachMonth('fJuly'),this.ViewsEachMonth('fAugust'),this.ViewsEachMonth('fSeptember'),this.ViewsEachMonth('fOctober'),this.ViewsEachMonth('fNovember'),this.ViewsEachMonth('fDecember')],
                },
            ],  
            dchartOptions: {
                       chart: { id: "vuechart-example",fontFamily: 'Montserrat, sans-serif'},
                       colors:['#e76f51', '#e9c46a'],
                       dataLabels: {
                             style: {
                                colors: ['#e6e6e6',] }
                        },
                       labels:['Faculty Visits','Others']
                        },
            dseries: [this.views('fvisits'), this.ViewsEachMonth('tcount')],                    
        };
  },

    created() {
        this.facultyId = this.$route.params.id;
        this.loadfacultyprofile();
    },
    computed:{
        facultyProfile() {
        let facultyProfile = this.$store.getters["facultyprofile"];
        return facultyProfile;
        },

    },
    methods:{
        views(person){
            var facultyProf=this.$store.getters["facultyprofile"]; 
            if(facultyProf[person]==null){
                return 0;
            }
            return facultyProf[person];
        },
         ViewsEachDay(day){
            var facultyProf=this.$store.getters["facultyprofile"]; 
       
            if(facultyProf[day]==null){
                return 0;
            }
            return facultyProf[day];
        },
         ViewsEachMonth(month){
     
            var facultyProf=this.$store.getters["facultyprofile"]; 
            if(facultyProf[month]==null){
                return 0;
            }
            return facultyProf[month];
        },        

        async loadfacultyprofile() 
            {
                await this.$store.dispatch("loadthefacultyprofile",{id:this.facultyId});
            },

        }
    }
</script>

<style scoped>
.stats{
    position: absolute;
    top:10%
}

</style>