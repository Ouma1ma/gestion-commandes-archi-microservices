package org.sid.billingservice.entities;

import org.sid.billingservice.models.Customer;
import org.springframework.data.rest.core.config.Projection;

import java.util.Collection;
import java.util.Date;

@Projection(name="fullBill",types = Bill.class)
public interface BillProjection {
    Long getId();
    Date getbillingDate();
    Long getCustomerId();
    Collection<ProductItem> getProductItems();
}

