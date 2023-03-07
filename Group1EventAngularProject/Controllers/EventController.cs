using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Group1EventAngularProject.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Group1EventAngularProject.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        EventDbContext dbContext = new EventDbContext();

        [HttpGet("Events")]
        public List<Event> GetEvents()
        {
            return dbContext.Events.ToList();
        }

        [HttpGet("Favorites")]
        public List<Event> GetFavorites()
        {
            List<int> favIds = new List<int>();
            List<Event> favorites = new List<Event>();

            favIds = dbContext.Favorites.Select(y => y.EventsId).ToList();

            foreach(int n in favIds)
            {
                Event E = dbContext.Events.FirstOrDefault(f => f.Id == n);
                favorites.Add(E);
            }
            return favorites;
        }
        [HttpPost()]
        public Event addEvent(string _category, string _name, DateTime _date, string _location)
        {
            Event newEvent = new Event()
            {
                Category = _category,
                Name = _name,
                Date = _date,
                Location = _location
            };
            dbContext.Events.Add(newEvent);
            dbContext.SaveChanges();

            return newEvent;
        }
        [HttpGet("{id}")]
        public Event getDetails(int id)
        {
            return dbContext.Events.FirstOrDefault(e => e.Id == id);
        }

        [HttpPost("addFavorite")]
        public Favorite addFavorite(string _username, int _eventsid)
        {
            Favorite newFavorite = new Favorite()
            {
                UserName = _username,
                EventsId = _eventsid
            };
            dbContext.Favorites.Add(newFavorite);
            dbContext.SaveChanges();
            return newFavorite;

        }
    }
}

