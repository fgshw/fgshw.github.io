using System.Runtime.InteropServices;

namespace Pokemon
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

        }

        private void button1_Click(object sender, EventArgs e)
        {

            Cubone cubone = new Cubone();
            this.pictureBox1.Image = cubone.getImage();

        }

        private void button2_Click(object sender, EventArgs e)
        {
            Marowak marowak = new Marowak();
            this.pictureBox1.Image = marowak.getImage();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Charmander charmander = new Charmander();
            this.pictureBox1.Image = charmander.getImage();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Pikachu pikachu = new Pikachu();
            this.pictureBox1.Image = pikachu.getImage();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            
        }

    }
}