using API.Contex;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository.Data
{
    public class TransactionRepository : GeneralRepository<MyContex, Transaction, int>
    {
        private readonly MyContex _context;

        public TransactionRepository(MyContex myContext) : base(myContext)
        {
            this._context = myContext;
        }
    }
}
