window.onload = function () {
  new Vue({

    el: '#events',

    data: {
      event: { name: '', description: '', date: '' },
      events: []
    },

    mounted: function () {
      console.log("Fetch Events");
      this.fetchEvents();
    },

    methods: {
      fetchEvents: function () {
        var events = [
          {
            id: 1,
            name: 'Barry-Roubaix Gravel Road Ride',
            description: 'Good Times For All',
            date: '4-28-2018'
          },
          {
            id: 2,
            name: 'Beer Festival',
            description: 'Grand Rapids Beer Festival',
            date: '6-1-2018'
          }

        ];

        this.$set(this, 'events', events);
        console.log(this.events);
      },

      addEvent: function () {
        console.log("VUE");
        if (this.event.name) {
          this.events.push(this.event);
          this.event = { name: '', description: '', date: '' }
          console.log(this.events);
        }
      },

      deleteEvent: function (index) {
        if (confirm("Are you sure you want to delete this event?")) {
          this.events.splice(index, 1);
        }
      }
    }

  });

}