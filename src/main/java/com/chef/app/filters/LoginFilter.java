package com.chef.app.filters;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.ui.Model;

import com.chef.app.member.MemberDTO;

public class LoginFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
			HttpServletRequest req = (HttpServletRequest)request;
			HttpSession session = req.getSession();
			
			Object obj = session.getAttribute("member");
			
			
			MemberDTO memberdto = (MemberDTO)session.getAttribute("member");
			
//			if(memberdto.getMember_lev() >= 1) {
//				chain.doFilter(request, response);
//			} else {
//				HttpServletResponse res = (HttpServletResponse)response;
//				res.sendRedirect("/member/login");
//			}
			
			
			if(obj != null) {
				chain.doFilter(request, response);
			} else {
				HttpServletResponse res = (HttpServletResponse)response;
				res.sendRedirect("/member/login");
			}
		
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}
	
	
	
}
