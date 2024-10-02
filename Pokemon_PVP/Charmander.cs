using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pokemon
{
    internal class Charmander
    {

        private Bitmap _image =
           global::Pokemon.Properties.Resources._004;
        public Charmander() { }



        public Bitmap getImage()
        {
            return this._image;
        }
    }
}