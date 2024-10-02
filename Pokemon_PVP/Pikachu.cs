using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pokemon
{
    internal class Pikachu
    {

        private Bitmap _image =
           global::Pokemon.Properties.Resources._025;
        public Pikachu() { }



        public Bitmap getImage()
        {
            return this._image;
        }
    }
}