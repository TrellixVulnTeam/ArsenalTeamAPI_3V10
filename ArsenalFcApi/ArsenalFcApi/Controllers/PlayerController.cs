using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using ArsenalFcApi.Models;

namespace ArsenalFcApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _environment;

        public PlayerController(IConfiguration configuration, IWebHostEnvironment environment)
        {
            _configuration = configuration;
            _environment = environment;
        }

        [HttpGet]
        public JsonResult Get()
        {
            //this is bad practice and unsafe, prone to injection attack! change to stored procedure after finishing the tutorial
            string query = @"
                            select 
                            PlayerId, PlayerName, PlayerNumber, PlayerPosition, convert(varchar(12),DateOfBirth,120) as DateOfBirth, PlayerNationality,
                            PlayerSquad, PlayerApps, PlayerGoals, PlayerAssists, PlayerCleanSheets, PhotoFileName
                            from dbo.Player
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PlayerAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(PlayerItem player)
        {
            //this is bad practice and unsafe, prone to injection attack! change to stored procedure after finishing the tutorial
            string query = @"insert into dbo.Player(PlayerName, PlayerNumber, PlayerPosition, DateOfBirth, PlayerNationality,
                            PlayerSquad, PlayerApps, PlayerGoals, PlayerAssists, PlayerCleanSheets, PhotoFileName)
                            values
                            (
                                '" + player.PlayerName + @"', '" + player.PlayerNumber + @"', '" + player.PlayerPosition + @"', '" + player.DateOfBirth + @"',
                                '" + player.PlayerNationality + @"', '" + player.PlayerSquad + @"', '" + player.PlayerApps + @"', '" + player.PlayerGoals + @"',
                                '" + player.PlayerAssists + @"', '" + player.PlayerCleanSheets + @"', '" + player.PhotoFileName + @"'
                            )
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PlayerAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added successfully");
        }

        [HttpPut]
        public JsonResult Put(PlayerItem player)
        {
            //this is bad practice and unsafe, prone to injection attack! change to stored procedure after finishing the tutorial
            string query = @"update dbo.Player set 
                            PlayerName = '" + player.PlayerName + @"', PlayerNumber = '" + player.PlayerNumber + @"', PlayerPosition = '" + player.PlayerPosition + @"',
                            DateOfBirth = '" + player.DateOfBirth + @"', PlayerNationality = '" + player.PlayerNationality + @"', PlayerSquad = '" + player.PlayerSquad + @"',
                            PlayerApps = '" + player.PlayerApps + @"', PlayerGoals = '" + player.PlayerGoals + @"', PlayerAssists = '" + player.PlayerAssists + @"',
                            PlayerCleanSheets = '" + player.PlayerCleanSheets + @"', PhotoFileName = '" + player.PhotoFileName + @"'
                            where PlayerId = " + player.PlayerId+ @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PlayerAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            //this is bad practice and unsafe, prone to injection attack! change to stored procedure after finishing the tutorial
            string query = @"delete from dbo.Player
                            where PlayerId = " + id + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PlayerAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted successfully");
        }

        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _environment.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }
    }
}
