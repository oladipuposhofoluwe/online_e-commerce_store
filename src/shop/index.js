const SHOP_DATA = [
    
    {
        id: 1,
        title: 'Office Laptop',
        description: 'ametipsum dolorsit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sitconsectetur adipiscing elit ipsum dolor sit ametipsum dolor sit',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzj2iF0D3rlwfILQ30z3k01ribZp4yQmCjQiXD9fR8FVVJmNB_1_8tuT1hZadv2JeaWc&usqp=CAU',
        price: '70'
    },
    { 
        id: 2,
        title: 'X747',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit ',
        imageURL: 'https://p.kindpng.com/picc/s/183-1831809_transparent-pc-repair-png-computer-and-mobile-repair.png',
        price: '70'
    },
    
    {
        id: 3,
        title: 'MacBook Pro Laptop Intel Core i5 Apple, macbook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolorsit  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sitconsectetur adipiscing elit ipsum dolor sit ametipsum dolor sit',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXO6thgKKZ847bIBIPkVpa8mCl0XKodL0Gp02SBdgnXtMarhKsttsDeqJQWsDQo-sYCBk&usqp=CAU',
        price: '70'
    },

      
    {
        id: 4,
        title: 'Black And Red Headphone Wireless Headset PNG Image & PSD',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolorsit  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sitconsectetur adipiscing elit ipsum dolor sit ametipsum dolor sit',
        imageURL: 'data:image/webp;base64,UklGRgoZAABXRUJQVlA4IP4YAAAwkQCdASrhAOEAPtFepk8oJSMmp3RcYQAaCWVrk2z498x22vsS3Y/Dvn/setXo3tj6qbePeZfIG/GWuJdXHc26w4rP7fLGICzKaNn9L+x3ms+mvS480/9Vfgn/Vr9uvgl8tqs/ZefLff9J+pfKfWB5aPM3n99KHmDf2707emXzcecB6d9539CXy6/aj/ca2e/Oevn9O653Af8B4a9mPu9/neM8jFJ8eeBPI+oP2Pmvep/iX/jf+z7B/8+/xPrJf8fmE/b/Ub6Xv7v+0cb/ylMHvVH2Wqn+RZXXH9/DTPFjO/QNAyZeqaw+t7N6XASoVkngExeMuzKM20Z1IdpFWPf859u8iYE//08fFzn/40Deofx+Su4h+eAHxFWv+vbedWV6Mgtvbf5VYgihllYI/Mjh44K6GpEt9amQqvTbR+Rj86sPLWAy+krR31VWD9VgvcUgprEDFdKRKLWfsbjInkhneiaO3e7Mn7d/G5m7FnAvo9b2q5+NTmg0F8qpF4GhA3MA1Ff67kW7ZTwT7PJLVM/PKW50XDKdoNtpd2s7LQ8neJa+hX2DxgzzrIp9gcCLi7KWQcBlBIZoLhW/Y3zqcsUz0amRyAuOa2N3EDeOSqwUZIq0I//m7tcuKfSCw3/RCK8Pfy5/aad3pMVD/gWtiqmyPyxki0Qfd0Neg4l/HGAZBLE6YVzII7D+jrTjzPbaVgjyPOuu9RF/lCROValUMYU4A5nuaJmQmuGcKLZ4/hvp0vYTNBi5rih/2Lf25u8Ksrdqv1yEsXi0M6r3bkzGhABvc6V+VaILUpfa1Gt4lQRaf9TBMI2tL4RvdsSSfdN/1kqo1jI7vFzrbx8Q7QCIvop/xGiPivu/bJvokyNIn1PEK4IQh1wuynbQQDxfofElDMjRS1kiTyoR0UQ9SjZX0/yW3Xewdpk4JbBgCd2f3ewwbDnagsBMDovUFEiTga70ewbNniTabiWmMKLTivNGyZLxZjWMXARZpU+0QnjuD94qCyZLQtPYWHFO8REa1uD8g6kBOl0NQw41guxNTp+B1/b5+EOm3WV9EXyE5RJaf5z+PqiC/1jvdLmxBIOSq0Bs6idmw+9/15QNOen0DHkcEkxy8twqLTaMInzzsPTOwUXsN2fk243yTvtxFT4bgSWyIFHWZtARbXdtQ2Ri5lbf7BuvRvvvQC0b8ywow4Liq38knU1lsIUVq7VTft/oruSr/9p8ck88UVQvRza0GG6yPI0RBZaGzLFp2ccXd+T+fsejLI1/UBqQj4hW6QLdwxZUMBYI/+tsq/MGAO65qPB4ikaleSXgVSypis23+EFrp18Ys50f6f7K0u2YQ2MjNBAJpDfe694Aklx4pKJINfDS1IpnZlHZ+wxbawn56U9r+BFzqc4rBFzVCsKZ9ddYsUXMZy74ZH0ftutPfG1/z13cTQ6guc6OP0pJHwguObPgqQWQdR2pNga/S3D/+ILWvemfk9WLlf0jXROmyjlbMDG4QMEMxwf68Qu5v6a//L5IEfgpL+ejsxCT2Ll51cyLbMUdB2wRvBUf8YOjPi/RfF+i+L9WKmgA/vf15NcfHz+8aoMC56J1w8AAVtywYwQb2OkuwELdg8d0/uPAxTJjiX4Lj0eP63F+9dbG7jTVX/zn573pWSZw/CL1ou5SbAmJgSORuJDAKmtWgo81B++xbB9tFCZzSSjB+tPveIoA5qX3aWMMZfOL6xdQXmastH6RkicsgVoOuqyfUz5Sh/ZnoD2sHVYZqyiJ8ajb2TjEvMjKvI1JZMtoUQrSqIWHsKkX1zz28p8L94yuYdu20ZVD9WyiZBtYfbBXz+iCd4UkffHjw2MMk2jOahAe63bQa+7a9BPuZ5eYU0jHcqBMqRgfukVpEUaIy1sSqSRseNe2/PJADMfa1tHOvLEfEVVBX1UbChBm51nrfGxz9XXTetwc3MXBcNJHUw9XsU8GY1u6d02XAySdnHHecDC3bRDtmR+Tu5MwC61yw6ixbz5zYa0K/zfWoitReIBsLeWX2vY0xq8PdWat69teexR7Y+HdSSN89vmIk4tlR5bmKCDnIRX/XpFPAhKPnXzqLrpsXFFE86wwQf7MkA1NxfXIUGCPsSRREOBLH34jMnHooef+7PVy+2NziDWzh9cKb2iaDT/sAYwuAyCzeRdDuDsInw+Tedkt9zmU/L31Ss05RFnrQZL0pEJ4VeQgCgecWAr/Y70lhROEFuI8WeOMgIIAv9/zq+46iYQdTG+Mv5pjGfZInP7058wbKvnOD7x72JoXTQID0swVWt6bWQPqy053uc2EbTTBEYHdNT2jEIgcPRHsBtsq/0IR1H+iIh+P+ZQo5BGFNeui9wzkmQrsVFpghx3AjWM8aiVXWmkjrl4RhiFX0WNoGFnp3skQa694Qo7Ue13cE9PAhi46HivHB1QmUzZZ68S2ROvcYpyYgHK+tUqzSpg/Q5pp1lw/+DbQLL8A5GJtvXqHNF4/PSWMl6WQqC5aLqPP0ms/lTyzpuJIBYnMgLcoC6cw5hzDt83PKM7mh2HMxKJEYmXNGzXyEFh4qcg9lsxULcLvFWRMoQ7GvRw/AmNLiivrFNpZ2UyAlm0BR+2/bMZaih4VthbDopamQGiWECgh3THaNHOLoVmBgGT1NbpNflrzkT/rMuIrwinyJmfNCP17/yRIdtWyRd2AvQfGnl7O83kMb8QYxqAY6b2qsfLb9NZYa1MGhFGz4GAEXU4X6wXlrj0dxwiG4waFYtwH/em+t+7bXITqAoPWqqLCDgT/6RC0ux1aL0Oity5tn7zA/x8AbMbqw8dhqCBmk9eZVn3vdnb98gYGd/SlYoA/aCUxAxYjSmlRArSU8XK+NCRXTmx18cdUBqDQQaX2wDgVC6FfPsusjefiNX9OU8pYFy43RsN6Tlolp3QcZPOaKnCtKbZeSs5PuEcDZgpREYAVBHGz3CJ8YU2hYhGhnEDfoVS05EP7XO3JCUxyARY+TlDQvrftQj9tHrut81DkFMbrR+6EfBaZtSrwlJTaLEfjJcvdayXvPm6bNxAzV9akDxuD+VJa8FNtGH9fqTNvoVdS3MdASacZoqY8f9aj8ixJZFrCUvX3DHwtFIFDiqAuFRDiYfxTAZY4K/ww/jhLVVdC2gQUJonROfNe0fNqvpJYg2o+XL0zjlzUAatbiZoANf7oLDkgSXR69HddQ0z14pYcU4HCaNlQkApDP3+ItykGNgxR29g3Z4rXWPLioSWE4cMZOvegIxCyl6BWWY1eHzJZZmJIJ7hr8W+1/qqzLUMIvCD5asDydClynG5Ntd0rc+Ie/mcAGbaw5McXpi0Kz4KyZLiwOfRF8CNbUsj6AwA07zGdUciF0/Tv20yhZKDl5JzX90Lu7m8FS/tG/vJw7Qs2+M/jwCl0et2Ee8mGZ/J1j7jcX481lGG+6CmEZ3eLVVFkTFnL/f+IVgmy9DcUwFMeo3zR8T3F/8iymlKtmwK0dRjLa6FOP37gJ/7Xbjk2pyFXqOIknynRIlA9ONSEFxbn56HJycGwPDl31u03Sbyf1dkAHkFEQG6+XG+2za9Ws/P4z8d5Ud/Qbqm3i1tt5V7PNSu8xvDrj68FjkemZMeGoYAGWTuMWOxIpuVC8Vf6AhXai/DKUd6kOhAuErT4BplJT6Byu7jRt1zldBO9BirjxNbFKAdXskVMqTaV8H7vy6VqozIIyhgSMMpwhd00J9kxZ2nCbvF0B9YxQJerDnAjzMfg1EUmAArJzmddjHlpbfNsPOosP4u0t+6fuCLRPNsOMq5mT6mxFvPSPD/DjWfOXTr0eSI/Bm5+nPLRTg5tO3xlfeW5eBeDpilqk0c46Fnb2WgD+McLvv0yPdoU8wuXgqjl7+X502rJGlXFH9CTp6/GXE2C1yY0AY7u0gXSZ1Mgegb414tXsvwOWQNITMmT//szTD3UdOqZ6kTtT7mYvvdJUI3H31WeQue6DupoCOvJjCwt5YJgnLA0H1dNamc51Rh4gKPH5A0iZ0QejdYcn/a7vwmRuA1cIRzxvjMeZ3i+ZIrSOlxcsSbjwiSvAqbka8Zpv8rb1Q4/GmbEA8nfgIhOhT9im1K7zG/bIY16JvgusUFljtyU6dcZkZrhWKaipkbvbqcHgV+uHL/B4msNSRj+SGB02kD1t/vRph3OZLuNhvP8OOgaFfduK0RkeZc0sltGBQ4AXi+ZyXkqTk4G1vmmYOzjsXWSYlpD0Z3ybXo8CNh2Id0JwanCekqQktg+4LUK8lpMlh/Z1imU7IX4vj2o5TNH7jXJFFUSp7R+voV4c81GQZ8jWF+jzR553hKHWf4Pr//FOqcRI7m0aQjP5SpkpnoqESsIFeO+4dyyXG5tRIRFhHPfZZZ+ekqQQjxgRXIVnci2Z0l6pLiUTZ7Hwg29X4FQJ2vFylKdtVLSMG3AT3cGLnhU4n/7tyvu3O+Gp7qilILOdLk8+HUrNsfTCYzBIi55+SpBo+ofoY+qDpw1YA/CVHbze0/6O5FFNeN8wf1cMuLGLfvYnu+w7zS1QF6M8hCB0M1qJVFrpjFh22p+jk64Dj8q9B7fXpU06kYocU9Cfrmf5lx/iApZCGjMq979HrQG8SgZg4HFSi7yMUIHJlhJshePfIih/TtJjL+pRK8D4DN63zdIld0rJUZ+zGE34emf4lZR74qU1iZukNfNeEmt4NxT9lwGnQy7s7MycVFM7MRlRVN8L4HyGn+7o50OnSyt51ZnIfnhPHhGYiLXXigbg6SJ3iF0PnMPDRIFcr1CD08rzMQu0gBgff+ifW+1yNrNSaG4EIRO9EUnhK1kUosLKTDSwxvlvKZ81SuwSfo2uC8DMSQPbLgxQ85yOtGLfMYarkNk4xZP0IknIWoR3X67pavI3rNOgUpVJ2SGQt/Dlnu46FxPjfaVrYm1BVq35mxAXlxLCH0Lrcvu1yrqfm5iNzbyK+H6XP0TgPg5YOcWst2YzD9b2GnGq0aB2QtIuv/a02pP/3B8L5OBXTA64QIgEuNbUETutGLkPAn+5FB65rf3I0w++r3AeqKVwCMBo+NOExlq+1z40E15olz8AU6tE4aZvAj4H8ZIpSd+qMXhH5OTDkDRmXapn0JUZ5pe4fgiTKDDveLnzhGPxMw6nMPC3cfisGxFAfcKvf5fbj5A8Y0RMuoajEH4FBu1nSWEz7hkUMPdZc270q4bEp476y5X808fvlrPoGZr1xZ49tVOGY4oPtrtnQ6D+1DmmPvN757D4jaxiW7dAToY9D+iT6wpjwXQKz+8hQzPGhzD4ax9id6Dc21VkKUNBHM8QpJGAnKQH0LhBK3fU3sz6uOzbF39jSra3yi3njlw2+ca6CbYBpEX2OHSSFjnWz03EjZrwFLJj3LTV2nkJroDrL/Mw5yL3/RLLhpkE1V43NiXQAaW7AQa+8RmPvlfOl/7vrMumwbM1z9NlkCWspAAjfH8N7UlhlSAh54w4CE63ErOK3Kuab53BWMq1uDmM0jNfMqAek3WNinUumkLwsBTZ9dilfGMH1tugZYcijuTPsnbYPF9y8ij2m29oMwg0E0KJsYzfoH8X99Seh+APZSNRhtE9oNZR4ImD3GAPSFKkkNnM0Cj0zJmZjR/B6te9XqAkmVvGkcWjyX8JhDzatkky95f0yueEcS8PWwjAFnoj4NCQxSP8cjI1uE4IEXsofzQUucUNhm8+RIIZm6eZKg9qzuhD1DrEP314GHJs6sf/FYV0WM7F9CPK0TTJDjDm1Xs3rERgPGPXhLpU7hYE3sw9QDWYn6wC1FuaDtZ9nblee80UXtsGBUuuqGsVXv1w+qu+dKqJjDilbGxZlnHMqlVYZa3m3+YNWz27qEmmP/4EOJW30yfWq9P/QILZVjS8DIr7EdjT+La7BaPLR+P+c5hkDa3GBM5S6CKsH1ZjH2srzwMJOinZLVp5UWsMPCO4jWUusIClgD/zzKNYKpf8HU79OU3MvNiTbFo6c9rXN5JzvAiOseqgYpeNiXSmFW2j4Aq1WpfvOGdkVf2/is0+FhtRgY7nLoCQgrjSYpurkTIt0jtlClVNW1BrxhkZwHsPdilBr9K7t53S3paGX8VuSU1gD1wcMGpy8Da7nrIGjZYeyAY06pJOh+BLYjzFTOgo24fzM/i5AVwBdjfmyt8E5scTuwqviApxGFgZ49tYpFHKbuieyRpbSKkaE7vjtJ41Y/i4MgjNgzmmJmm3JyAmCCmWVGnsv2yPO2stloAFuvmEcZPzKi2FS2vgidDGUjAbIjMm9IK3ys2Gmvu88rYEGOXCIl7ps7LT5nlf/1PInIEKIpXMi+O35V4TO4AEne1xZ4MhJPbSuNo9X9ugy1DyYEwH2SuGKztRV7AmqCGhuHwpOczU+ju1yIw8kUrkaDf/nb/xtvHibQF94VKcWdIq02SsN2VPVf89TlDtzrubtkMjXvNy9o+VvYhEkwh6JKb5kWSXbGxcAMU2iCYHC8aL6soe9Ai5azm82JQLY/wG5ndwZouk+GD9z/ot41QXK4gBUSiHQk8mLYVOVr8ghtHeWMPndpWYnba1klNKtKqPR756f0LiCZOcBLisXTFKOmhicjnT62tSrJEmIW6V/CeVA3uM3ST4RVtxsMCNvo6wYlpIzo1r1CDsY4oAWF8Jcjjhg8mMEmUVN88EmjITVNTFxZCIsiZwcbJRGEdue09p92dQiNK/edEu4fTizCV9ewM2hX6k3PTwMeZ+lXHW4qP95t0Wswl8zOfUvEz7/n7vfjL9bBNVvEI3NSeL50GCKDaVoLupF+DyARiBI31o0oCM5lucRfdpvOacqHc1Z6aVU3/ufDVbLlb2FBcB1nMHZ03nvm89DJ8bWm8od/8fvb6pu+tVOseAMA6BE3Jn+oQxGjY6dpJ46GVG5Glihjme8RlQE0pl1hqFnsPIUOBS6TbLFXQWiMdMU6xd5EuDulFHTjUQK+Nibm5WV7ZUw2JLnemaJOY1cRbQTECx+QvCW5rcoKPAjPd56/qp0U2leUhfwbmiLL4cX10pR3KRHh1pA3pOLwzck3k79rrssVQcAbFXki6+vymqkWN5ggQa07ZEkgeO/sPx280pyb2/OHiVl7izD7kAhAbhndZwHa8KNSHF9KZK1odk55hp9nRPySAKE93OpO8kVYYt6DBOA9Z75CvxaAaR1Sm8Ut3ZJ73NqCyNCFm3EG9oy3kFeuwg3GxVWobOVzGzeQwG7lh4kPMU6crOWn+Novt8vRGO55ECYhqH2LPDwLeq8O+VJ880NCuRpduIr4tPiJg2ytZNu4oTeUbkwsm2ZymiJedJOOMWt1aNpToT8fOvgSV1UqMRePEbwZTOe5sARE4aFojQ8wxLYw4FYagV4z9gpCX0jkPGDUgTOQhw2qoVXCtMhLhEnffU81fu9izJV+T5U+wDDHHVCdZi9suSMRFcuTEg7dFXh5g6nr9FhpV2cIOf6bB1o8KYeoaTHWpeC3TLtFBhT2uStp0HLi0xyDs8La2l9aDH2tXkWamXARU+fMVtEUDvV1G7kvEJ/S2ERv45T7swRZczfmwEoEPnhFlGUmBBcIaLv500cgQzfW0NHUG+2zeKhHd9WxC/refcZK9VLJNC83HV0aGFpjEKTyIqgsHfHKK7L1+3lqEGn3TfRf8cwCQankC+vx3hVtLcUX6KILh6yf7SYSgAleUg/2q3amnzXtHzaqaePLTRavyzVU+eQxXfSxUDJhS0prfTwWXHZmcjxqXJx9XZOYZCgvNUC48ayhoS16l1JqwzIaituFvKewzsTGY5rtzRG3IAGpMZajc4k4IIpaF3InhRtq9u+ju6cqA/w8tW01pJ+mtV+PYTDA+Im6kUcTH63PeIhUkwwI8MnP0XuTO039tX1sclQzOr77VQoeGIAN4cpoekePocPvmxOO0MfBZTOE7tnXkqCRL1f49i/VA0uXyds/8ig/M4fnKKSHCIPB+Q8PtUS8iGrMqxZivp7voNqMbpYhOs5nRGtc4VL+huBXHFZHTEbwvrdQC32/nebYJcpNZcAMrsNjxV6Jny5DPkcJMD5+vYK8/GlpAuYq7yp4uPx55z9PWFQd2r1FvgvttbreXo+W8eEt+HlL5YpxLpyFgnvQIU+yoUXgJnnGB3X00P193l6Grl9Pb4fEsOnw1RhDQ6JKD4KxVYhzgileB4sZAv+p2PD588nP4y3kUvEGY/gu3yQeO6ilWxwmu0SzBpI3Bk4WpXeEt+3zHH01qa2jxpZyfWiOhZCAcYUuTyGJ48zMapUGc7q523fvHKXrZ0JXbJSsDidQZJ2LEQGeQmnmbbQXBfA/+9Z34sZg+5vMR0bn5Sa2gKydxnvQ8ZBbxvGg+itsRR3sVRPN6KamM54S4XcCylElTz6tx1+kJqAzUEbhC4VRjXkDu/4n+UTCkvEl/EWngKBGq58To3jZxEiJRnWFj0RK2GOahmvcDaKoDLZ1Un7Tgo4FjzKUXxW8ovit5RfFbyi+KzHczbUgHQchrRf4ygJ19Bd7lC4GlTvcZ1sFJh9hOISjqEm2f/wqATZtwYu1FlE+oTzVDwWjq0eL2hOpDlwAAAA==',
        price: '70'
    },
         
    {
        id: 5,
        title: 'Samsun headset',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolorsit  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sitconsectetur adipiscing elit ipsum dolor sit ametipsum dolor sit',
        imageURL: 'https://img.tatacliq.com/images/i7/437Wx649H/MP000000008803899_437Wx649H_202102170234021.jpeg',
        price: '70'
    },

    {
        id: 6,
        title: 'Samsung Galaxy S6 Telephone Smartphone 4G',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolorsit  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sitconsectetur adipiscing elit ipsum dolor sit ametipsum dolor sit',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb5-1x-5mD2gyrpgOk8bVtO5y_sEK7ppZJWmHSkccm09kAp_NoBmvtQXim1lC9NeJ7OQk&usqp=CAU',
        price: '70'
    },


    {
        id: 7,
        title: 'Accura headset',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolorsit  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sitconsectetur adipiscing elit ipsum dolor sit ametipsum dolor sit',
        imageURL: 'https://images.samsung.com/africa_en/smartphones/galaxy-note20/images/galaxy-note20_highlights_kv_video_end.jpg',
        price: '70'
    }, 

    {
        id: 8,
        title: 'OPPO K1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolorsit  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sitconsectetur adipiscing elit ipsum dolor sit ametipsum dolor sit',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcF0Otb3-FioO5qhTE8iTF0rUUcM0EjjzOQpsMPBgnhNc6-VpwdseM6Gkvhg5AQTgQkg&usqp=CAU',
        price: '70'
    },



    {
        id: 9,
        title: 'Gaming Headset, Samsung X747',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolorsit  ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sit  ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit ametipsum dolor sitconsectetur adipiscing elit ipsum dolor sit ametipsum dolor sit',
        imageURL: 'https://img.favpng.com/23/4/0/playstation-4-microphone-laptop-headset-headphones-png-favpng-TnVHDiE0ZWZEnFPn9K8EeeHLe_t.jpg',
        price: '70'
    },
   
   
]

export default SHOP_DATA;
