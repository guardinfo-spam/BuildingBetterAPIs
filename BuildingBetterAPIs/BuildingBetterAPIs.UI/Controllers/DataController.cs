using BuildingBetterAPIs.UI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BuildingBetterAPIs.UI.Controllers
{
    [RoutePrefix("api")]
    public class DataController : ApiController
    {
        [HttpGet]
        [Route("standard-get")]
        public HttpResponseMessage StandardGet(int id)
        {
            //no data so I am responding with a null object and the 200 Http code
            DataObjectModel result = null;

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpGet]
        [Route("explode-get")]
        public HttpResponseMessage ExplodeGet(int id)
        {
            //no data so I am responding with 404
            return Request.CreateResponse(HttpStatusCode.NotFound);
        }

        [HttpPost]
        [Route("create-entity")]
        public HttpResponseMessage CreateEntity(DataObjectModel model)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            else
            {
                //some code to create the entity     
                model.EntityID = Guid.NewGuid();       
                return Request.CreateResponse(HttpStatusCode.Created, model);
            }
        }
    }
}
