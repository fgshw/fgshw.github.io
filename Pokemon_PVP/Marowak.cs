using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pokemon
{
    internal class Marowak 
    {

        private Bitmap _image =
           global::Pokemon.Properties.Resources._105;
        public Marowak() { }



        public Bitmap getImage()
        {
            return this._image;
        }
    }
}
