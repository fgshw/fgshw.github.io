using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pokemon
{
    internal class Cubone
    {

        private Bitmap _image =
           global::Pokemon.Properties.Resources._104;
        public Cubone() { }



        public Bitmap getImage()
        {
            return this._image;
        }
    }
}