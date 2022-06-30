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
    public class PositionController : ControllerBase 
    { 
        private readonly IConfiguration _configuration;
        public PositionController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllPositions")]
        public JsonResult GetAllPositions()
        {
            //this is bad practice and unsafe, prone to injection attack! change to stored procedure after finishing the tutorial
            string query = @"
                            select PositionName from dbo.Position
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
    }

 
}
