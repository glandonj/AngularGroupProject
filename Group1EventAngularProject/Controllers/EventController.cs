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
            List<int> favsIds = new List<int>();
            List<Event> favorites = new List<Event>();

            foreach(Favorite f in dbContext.Favorites.GroupBy(x => x.EventsId).Select(y => y.First()))
            {
                favsIds.Add((int)f.EventsId);
            }
            foreach(int n in favsIds)
            {
                Event E = dbContext.Events.FirstOrDefault(f => f.Id == n);
                favorites.Add(E);
            }
            return favorites;
           
        }

    }
}

