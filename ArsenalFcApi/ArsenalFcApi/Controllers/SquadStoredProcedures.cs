using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace ArsenalFcApi.Controllers.Squad
{
    public class SquadStoredProcedures
    {
        /*SqlConnection sqlCon = null;
        String SqlconString = ConfigurationManager.GetConnectionStrings["SqlConnectionString"].ConnectionString;
        public void Test(string firstName, string lastName, int age)
        {
            using (sqlCon = new SqlConnection(SqlconString))
            {
                sqlCon.Open();
                SqlCommand sql_cmnd = new SqlCommand("PROC_NAME", sqlCon);
                sql_cmnd.CommandType = CommandType.StoredProcedure;
                sql_cmnd.Parameters.AddWithValue("@FIRST_NAME", SqlDbType.NVarChar).Value = firstName;
                sql_cmnd.Parameters.AddWithValue("@LAST_NAME", SqlDbType.NVarChar).Value = lastName;
                sql_cmnd.Parameters.AddWithValue("@AGE", SqlDbType.Int).Value = age;
                sql_cmnd.ExecuteNonQuery();
                sqlCon.Close();
            }
        }*/
    }
}
