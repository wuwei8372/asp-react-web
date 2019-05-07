using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Villainy.Controllers
{
    [Route("api/[controller]")]
    public class VillainsController : Controller
    {
       private static List<Villain> Villains = new List<Villain>(){ new Villain() {Name = "Junq", Message = "Can make weapons and gadgets out of anything available", Email = "Crochet, macrame, kidnapping" },
           new Villain() { Name = "Darkness", Message = "Converts light into darkness", Email = "Robbing banks, blackmail, puzzles" },
           new Villain() { Name = "Blast Wave", Message = "Generates concussive blasts with his hands", Email = "General villainy, doggie dancing" },
           new Villain() { Name = "Smoke Jumper", Message = "Can control fire and smoke", Email = "Extortion, arson, poetry" } };

        [HttpGet]
        public List<Villain> GetVillains()
        {
            return Villains;
        }

        [HttpGet("[action]/{name}")]
        public Villain GetVillain(string name)
        {
            var villain = Villains.Find((v) => v.Name.ToLower() == name.ToLower());

            if (villain == null)
            {
                return null;
            }
            else
            {
                return villain;
            }
        }

        public class Villain
        {
            public string Name { get; set; }
            public string Message { get; set; }
            public string Email { get; set; }
        }
    }
}